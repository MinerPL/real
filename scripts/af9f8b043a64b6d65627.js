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
                _ = a("731898"),
                T = a("206230"),
                S = a("679653"),
                C = a("509802"),
                N = a("406043"),
                E = a("87635"),
                p = a("396856"),
                M = a("549077"),
                A = a("144491"),
                I = a("689275"),
                v = a("707443"),
                j = a("300322"),
                R = a("967241"),
                O = a("982108"),
                F = a("42203"),
                b = a("474643"),
                L = a("88093"),
                y = a("585722"),
                P = a("471671"),
                D = a("837899"),
                U = a("425190"),
                k = a("891152"),
                w = a("423487"),
                H = a("378765"),
                B = a("526812"),
                G = a("404607"),
                V = a("670902"),
                W = a("339792"),
                z = a("680986"),
                K = a("146290"),
                Y = a("250850"),
                X = a("867965"),
                q = a("688169"),
                Z = a("131600"),
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
            let e_ = new er.GridLayout({
                minWidth: 320,
                maxWidth: 450,
                gap: 16
            });

            function eT(e) {
                return "forum-grid-header-section-".concat(e)
            }
            let eS = (e, t, a) => 0 === e ? 0 : (0, er.getGridPostHeight)(a);

            function eC(e) {
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
                            id: eT(n),
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
                return () => 2 === t && !l && r ? (0, s.jsx)(eC, {
                    section: t,
                    coords: null == a ? void 0 : {
                        ...a,
                        position: "absolute"
                    },
                    itemRole: "section"
                }, n) : null
            }

            function eE(e, t) {
                return "card-".concat(e, "-").concat(t)
            }

            function ep(e) {
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
                    archivedThreadIds: _,
                    searchResults: S,
                    canLoadMore: C,
                    loadMore: N,
                    activeThreadsLoading: E,
                    archivedThreadsLoading: j,
                    loading: L,
                    isSearchLoading: y,
                    layoutType: P
                } = function(e) {
                    let {
                        sortOrder: t,
                        tagFilter: a,
                        layoutType: s
                    } = (0, W.useForumChannelStore)(e.id), n = (0, z.useForumActiveThreadIds)({
                        channel: e,
                        sortOrder: t,
                        tagFilter: a,
                        shouldAutomaticallyAck: !0
                    }), l = (0, h.useStateFromStores)([I.default], () => !I.default.hasLoaded(e.guild_id)), {
                        threadIds: r,
                        canLoadMore: i,
                        loadMore: o,
                        loading: u
                    } = (0, v.useArchivedThreads)(e, t, a), {
                        searchResults: d,
                        isSearchLoading: c
                    } = (0, z.useForumSearchState)({
                        channelId: e.id
                    });
                    return (0, z.useLoadForumUnreadCounts)(e, t, a), {
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
                }(t), D = f.length > 0, U = D || _.length > 0, k = (0, p.default)(t), {
                    tagFilter: w
                } = (0, W.useForumChannelStore)(t.id);
                (0, z.useAutomaticForumSearch)(t, w, c);
                let H = (0, z.useCanSearchForumPosts)(t),
                    V = (0, z.useCanViewArchivedPosts)(t),
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
                    en = null != S,
                    el = n.useRef(null),
                    {
                        containerRef: eo,
                        containerWidth: ex
                    } = (0, eu.default)();
                n.useEffect(() => () => {
                    null != t.id && G.default.clearForumSearch(t.id)
                }, [t.id]);
                let {
                    columns: eC
                } = n.useMemo(() => et ? e_.getRenderOptions(ex) : er.ForumListLayoutRenderOptions, [et, ex]), eM = n.useMemo(() => L ? Math.round((window.innerHeight - 200) / 118) : 0, [L]), ej = n.useMemo(() => {
                    let e = window.innerHeight,
                        t = Math.ceil(e / (0, er.getGridPostHeight)(e_.getWidth(ex))) * eC;
                    return E ? t : 0
                }, [ex, eC, E]), eO = n.useMemo(() => {
                    let e = window.innerHeight,
                        t = Math.ceil(e / (0, er.getGridPostHeight)(e_.getWidth(ex))) * eC;
                    return j ? t : 0
                }, [ex, eC, j]), eF = n.useMemo(() => {
                    let e = window.innerHeight,
                        t = Math.ceil(e / (0, er.getGridPostHeight)(e_.getWidth(ex))) * eC;
                    return y && en ? t : 0
                }, [ex, eC, y, en]), eb = n.useMemo(() => {
                    if (et) {
                        if (!H && en) return [1, 0];
                        if (!V) return [1, f.length + ej, 0];
                        else if (en) return [1, S.length + eF, 0];
                        else return [1, f.length + ej, _.length + eO]
                    }
                    if (!H && en) return [1, 1];
                    if (!V) return [1, f.length, 1];
                    else if (en) return [1, S.length, 0, eM];
                    else return [1, f.length, _.length, eM]
                }, [et, en, f.length, _.length, H, V, eM, S, ej, eO, eF]), eL = n.useMemo(() => {
                    if (!H && en) return [
                        [],
                        []
                    ];
                    if (!V) return [
                        [], f, []
                    ];
                    if (en) return [
                        [], S, [],
                        []
                    ];
                    else return [
                        [], f, _, []
                    ]
                }, [en, H, V, S, f, _]), ey = n.useCallback((e, a) => {
                    (0, X.trackForumPostClicked)({
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
                        numResults: null == S ? void 0 : S.length,
                        coords: a,
                        onHeightChange: eD,
                        children: !L && (0, s.jsx)(Z.default, {
                            channel: t,
                            hasAnyThread: U
                        }, t.id)
                    }, "forum-channel-header");
                    return 2 !== e || V ? 1 === e && en && !H ? (0, s.jsx)(eI, {
                        channel: t,
                        coords: a
                    }, "archive-or-search-result") : n() : (0, s.jsx)(eA, {
                        channel: t,
                        coords: a
                    }, "archived-missing-reading-history-perm")
                }, [en, V, S, H, t, D, y, L, U]), ek = (0, h.useStateFromStores)([B.default], () => B.default.hasHidden(t.id));
                n.useEffect(() => {
                    var e, t;
                    let a = et ? ez : Q,
                        s = null === (e = a.current) || void 0 === e ? void 0 : e.getScrollerState();
                    null != s && !ek && s.scrollTop > l && (null === (t = a.current) || void 0 === t || t.scrollTo({
                        to: 0
                    }))
                }, [ek]);
                let ew = (0, q.useForumActivityExperiment)(t.guild_id),
                    {
                        updateListScrollerRef: eH,
                        renderListSection: eB,
                        renderListItem: eG,
                        getListSectionHeight: eV,
                        getListItemHeight: eW
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
                        }, [t]), _ = n.useCallback(e => eN({
                            section: e.section,
                            isShowingSearchResult: f,
                            hasActiveThreads: l
                        })(), [l, f]), T = n.useCallback(e => c(e.section, void 0, () => {
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
                        }), [a, c, i, m, h]), S = n.useCallback((e, t) => {
                            if (0 === e) return u + d;
                            let s = i[e][t],
                                n = o[s],
                                l = (a ? ei.DEFAULT_INCREASED_ACTIVITY_FORUM_POST_HEIGHT : 96) + 8;
                            return null == n ? l : n + 8
                        }, [i, o, u, d, a]), C = n.useCallback(e => 2 === e && l ? 40 : 0, [l]);
                        return {
                            updateListScrollerRef: x,
                            renderListSection: _,
                            renderListItem: T,
                            getListSectionHeight: C,
                            getListItemHeight: S
                        }
                    }({
                        listRef: Q,
                        hasActiveThreads: D,
                        threadIdsBySection: eL,
                        listViewCardHeights: o,
                        editorHeight: l,
                        editorAdditionRowHeight: i,
                        renderSectionOrItem: eU,
                        goToThread: ey,
                        observePostVisibilityAnalytics: J,
                        isShowingSearchResult: en,
                        isIncreasedActivityView: ew
                    }),
                    ez = n.useRef(null),
                    {
                        updateMasonryListScrollerRef: eK,
                        getItemKey: eY,
                        renderGridSection: eX,
                        renderGridItem: eq,
                        getGridSectionHeight: eZ,
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
                        }, [t]), _ = n.useCallback((e, a) => {
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
                            }), h.current = ep(a)
                        }, [t, h]), T = n.useCallback(e => {
                            let t = ep(e);
                            if (null == t) return;
                            let a = F.default.getChannel(t);
                            null != a && l(a, !0)
                        }, [l]), S = n.useCallback(function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                s = a[e];
                            if (0 === s.length) return "section-".concat(e, "-").concat(t);
                            {
                                let s = a[e][t];
                                return null == s ? eE(e, t) : eE(e, s)
                            }
                        }, [a]), C = n.useCallback((e, t, a) => i(e, t, eN({
                            section: e,
                            coords: t,
                            key: a,
                            isShowingSearchResult: u,
                            hasActiveThreads: o
                        })), [i, o, u]), N = n.useCallback(e => 0 === e ? {} : {
                            role: "grid",
                            "aria-labelledby": "#".concat(eT(e))
                        }, []), E = n.useCallback((e, t, n, i, o) => {
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
                        }, [a, l, m]), p = n.useCallback(e => 0 === e ? f - 8 - 24 : 2 === e ? o || !c ? 40 : 0 : 1 === e && u && !d ? 40 : 0, [f, u, d, o, c]);
                        return {
                            updateMasonryListScrollerRef: x,
                            masonryListContainerRef: g,
                            focusedThreadId: h,
                            handleGridFocus: _,
                            handleGridSelect: T,
                            getItemKey: S,
                            renderGridSection: C,
                            renderGridItem: E,
                            getSectionProps: N,
                            getGridSectionHeight: p
                        }
                    }({
                        masonryListScrollerRef: ez,
                        threadIdsBySection: eL,
                        goToThread: ey,
                        renderSectionOrItem: eU,
                        hasActiveThreads: D,
                        isShowingSearchResult: en,
                        canSearchForumPosts: H,
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
                                    d = n[eE(s, e)];
                                null != u && null != d && t.current.scrollIntoViewRect({
                                    start: u.top + d.top - 100,
                                    end: u.top + d.top + d.height + 50
                                })
                            }, 500);
                            return () => clearTimeout(e)
                        }
                    }, [i, a, s, l, r, t])
                }({
                    masonryListScrollerRef: ez,
                    containerWidth: ex,
                    isGridLayout: et,
                    threadIdsBySection: eL,
                    parentId: t.id,
                    focusedThreadId: el
                });
                let e$ = n.useCallback(() => {
                        var e, a;
                        if (en) return;
                        let s = et ? null === (e = ez.current) || void 0 === e ? void 0 : e.getScrollerState() : null === (a = Q.current) || void 0 === a ? void 0 : a.getScrollerState();
                        if (null == s) return;
                        (0, X.trackForumScrolled)({
                            guildId: t.guild_id,
                            channelId: t.id
                        });
                        let n = s.scrollTop + s.offsetHeight,
                            l = s.scrollHeight - n,
                            r = et ? Math.max(200, (0, er.getGridPostHeight)(ex)) : 200;
                        l < r && N()
                    }, [en, et, t.guild_id, t.id, ex, N]),
                    e0 = (0, h.useStateFromStores)([T.default], () => T.default.keyboardModeEnabled),
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
                    e7 = null != e2 && (0, O.isViewChannelSidebar)(e2);
                return (0, s.jsx)("div", {
                    className: eg.container,
                    ref: eo,
                    children: (0, s.jsx)(g.FocusJumpSection, {
                        children: e => (0, s.jsxs)(s.Fragment, {
                            children: [c && (0, s.jsx)(x.default, {
                                channel: t,
                                draftType: b.DraftType.FirstThreadMessage,
                                className: eg.uploadArea,
                                style: {
                                    right: e7 && (null == a ? void 0 : a.isThreadSidebarFloating) ? a.threadSidebarWidth : 0
                                }
                            }), (0, s.jsx)(ev, {
                                channel: t
                            }), (0, s.jsx)(g.HiddenVisually, {
                                children: (0, s.jsx)(g.H, {
                                    children: ef.default.Messages.THREADS
                                })
                            }), k ? (0, s.jsx)("div", {
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
                                    columns: eC,
                                    sections: eb,
                                    getItemKey: eY,
                                    getSectionHeight: eZ,
                                    getItemHeight: eS,
                                    renderSection: eX,
                                    renderItem: eq,
                                    getSectionProps: eQ,
                                    onScroll: C ? e$ : void 0,
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
                                            ref: eH(a),
                                            className: eg.list,
                                            sections: eb,
                                            sectionHeight: eV,
                                            rowHeight: eW,
                                            renderRow: eG,
                                            renderSection: eB,
                                            chunkSize: 150,
                                            onScroll: C ? e$ : void 0,
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
                } = e, n = (0, S.default)(t);
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

            function eI(e) {
                let {
                    channel: t,
                    coords: a
                } = e, n = (0, S.default)(t);
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

            function ev(e) {
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
                    isSearchLoading: S,
                    numResults: p,
                    children: M,
                    coords: A,
                    onHeightChange: I
                } = e, {
                    name: v,
                    formOpen: R,
                    titleFocused: O,
                    hasClickedForm: F,
                    textAreaState: k,
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
                } = (0, W.useForumChannelStore)(i.id), q = (0, ee.useForumPostComposerStoreApi)(), Z = (0, W.useForumChannelStoreApi)(), $ = (0, h.useStateFromStores)([L.default], () => L.default.canChatInGuild(i.guild_id)), ea = (0, z.useCanManageChannel)(i), es = (0, j.useCanStartThread)(i), [en, er] = n.useState(es), [, ei] = (0, N.useCurrentUserCommunicationDisabled)(null !== (l = i.getGuildId()) && void 0 !== l ? l : void 0), eu = $ && (es || en && ei), ed = i.isMediaChannel();
                n.useEffect(() => {
                    es && er(!0)
                }, [es]);
                let {
                    ref: ec,
                    height: eh
                } = (0, _.default)();
                n.useEffect(() => {
                    null != eh && I(eh)
                }, [I, eh]);
                let ex = n.useCallback(() => {
                    o(() => {
                        null != ec.current && q.getState().setEditorHeight(ec.current.offsetHeight)
                    })
                }, [ec, q]);
                n.useLayoutEffect(ex, [ex, x, eu, B]), (0, H.useComponentAction)({
                    event: em.ComponentActions.REMEASURE_TARGET,
                    handler: ex
                });
                let e_ = (0, h.useStateFromStores)([y.default], () => y.default.getUploads(i.id, b.DraftType.FirstThreadMessage)),
                    eT = (0, z.useChannelTemplate)(i),
                    eS = n.useRef(null),
                    eC = n.useRef(null),
                    [eN, eE] = n.useState(0),
                    {
                        width: ep
                    } = (0, h.useStateFromStores)([P.default], () => P.default.windowSize()),
                    eM = null === (a = eS.current) || void 0 === a ? void 0 : null === (t = a.getBoundingClientRect()) || void 0 === t ? void 0 : t.width,
                    eA = n.useRef(null);
                n.useLayoutEffect(() => {
                    var e;
                    let t = eC.current,
                        a = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0];
                    if (null != eS.current && null != a && null != a.children) {
                        let {
                            left: e,
                            top: t
                        } = eS.current.getBoundingClientRect(), s = 0;
                        for (let n of a.children) {
                            let {
                                right: a,
                                top: l,
                                height: r
                            } = n.getBoundingClientRect();
                            if (l - t > r) break;
                            a - e > s && (s = a - e)
                        }
                        eE(s)
                    }
                }, [i.availableTags, ep, eM, K]);
                let eI = v.length > 0 && !R && (S || null != p),
                    ev = !__OVERLAY__ && !F && !R && O && (0 === k.textValue.trim().length || k.textValue.trim() === eT) && 0 === e_.length;
                n.useLayoutEffect(() => {
                    let e = eI || ev;
                    if (!e) return V(0);
                    null != eA.current && V(e ? eA.current.clientHeight : 0)
                }, [V, eI, ev, eA]);
                let eR = e => {
                        (0, X.trackForumTagFilterClicked)({
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
                        }), Z.getState().toggleTagFilter(i.id, e)
                    },
                    eF = (0, d.default)({
                        id: "".concat(i.id, "-tags-navigator"),
                        isEnabled: !0,
                        wrap: !0,
                        scrollToStart: ej,
                        scrollToEnd: ej,
                        orientation: c.Orientations.HORIZONTAL
                    }),
                    {
                        role: eb,
                        onFocus: eL,
                        ...ey
                    } = (0, d.useListItem)("forum-channel-header"),
                    eP = n.useRef(null),
                    eD = function() {
                        let e = n.useRef(!1),
                            t = (0, h.useStateFromStores)([T.default], () => T.default.keyboardModeEnabled),
                            a = n.useCallback(t => {
                                e.current = t.shiftKey
                            }, [e]);
                        return n.useLayoutEffect(() => (t ? window.addEventListener("keydown", a) : window.removeEventListener("keydown", a), () => window.removeEventListener("keydown", a)), [t, a]), e
                    }(),
                    eU = n.useCallback(e => {
                        if (eL(e), e.target === ec.current && !eD.current) {
                            var t;
                            null === (t = eP.current) || void 0 === t || t.focus()
                        }
                    }, [eL, ec, eD]);
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
                    children: (0, s.jsxs)(H.ComponentDispatchGroupProvider, {
                        children: [null != i.guild_id ? (0, s.jsx)(E.default, {
                            className: r(eg.newMemberBanner, {
                                [eg.gridViewBanner]: Y === m.ForumLayout.GRID
                            }),
                            guildId: i.guild_id,
                            channel: i
                        }) : null, (0, s.jsx)("div", {
                            className: r(eg.mainCard, eg.header, {
                                [eg.headerWithMatchingPosts]: eI || ev
                            }),
                            children: (0, s.jsx)(et.default, {
                                parentChannel: i,
                                onChange: ex,
                                isSearchLoading: S,
                                canCreatePost: eu,
                                inputRef: eP
                            })
                        }), (eI || ev) && (0, s.jsxs)("div", {
                            className: eg.matchingPostsRow,
                            ref: eA,
                            children: [eI && (0, s.jsxs)("div", {
                                className: eg.matchingPosts,
                                children: [(0, s.jsx)(g.Heading, {
                                    variant: "text-xs/normal",
                                    color: "text-normal",
                                    children: S ? ef.default.Messages.FORUM_SEARCHING : 0 === p ? ef.default.Messages.FORUM_SEARCH_NO_MATCHING_POSTS : ef.default.Messages.FORUM_SEARCH_MATCHING_POSTS_ALT.format({
                                        numPosts: p,
                                        query: v
                                    })
                                }), !S && (0, s.jsx)(g.Clickable, {
                                    onClick: () => {
                                        (0, X.trackForumSearchCleared)({
                                            guildId: i.guild_id,
                                            channelId: i.id
                                        }), G.default.clearForumSearch(i.id), q.getState().setName("")
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
                            }), ev ? eu ? (0, s.jsxs)("div", {
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
                                children: [(0, s.jsx)(w.default, {
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
                            ref: eS,
                            children: [(0, s.jsx)(eO, {
                                channel: i
                            }), i.availableTags.length > 0 ? (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)("div", {
                                    className: eg.divider
                                }), (0, s.jsx)("div", {
                                    className: eg.tagList,
                                    ref: eC,
                                    children: (0, s.jsx)(d.ListNavigatorProvider, {
                                        navigator: eF,
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
                        }), M, ea && !ed && (0, s.jsx)(C.default, {
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
                            children: [(0, s.jsx)(k.default, {}), (0, s.jsx)(g.Text, {
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
                _ = a("206230"),
                T = a("656038"),
                S = a("454273"),
                C = a("781555"),
                N = a("305961"),
                E = a("36694"),
                p = a("945330"),
                M = a("717018"),
                A = a("673078"),
                I = a("68238"),
                v = a("904276"),
                j = a("772280"),
                R = a("423487"),
                O = a("956089"),
                F = a("659500"),
                b = a("526812"),
                L = a("404607"),
                y = a("713955"),
                P = a("339792"),
                D = a("680986"),
                U = a("867965"),
                k = a("258039"),
                w = a("729608"),
                H = a("578198"),
                B = a("953371"),
                G = a("49111"),
                V = a("782340"),
                W = a("358040");
            let z = {
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
            class X {
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
            let q = (e, t, n) => {
                    let l = (0, T.default)(t) ? c.default.combine(G.Permissions.VIEW_CHANNEL, G.Permissions.SEND_MESSAGES) : G.Permissions.SEND_MESSAGES,
                        r = null != e ? (0, y.getAllExistingRolesWithPermission)(e, t, l).filter(a => t.permissionOverwrites.hasOwnProperty(a.id) || (0, S.isEveryoneRoleId)(e.id, a.id)) : [],
                        i = r.length > 0,
                        o = r.some(t => (0, S.isEveryoneRoleId)(e.id, t.id));
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
                Z = e => {
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
                        Y(B.ForumOnboardingCTAs.CREATE_POST), F.ComponentDispatch.dispatch(G.ComponentActions.FOCUS_COMPOSER_TITLE)
                    },
                    isDone: e
                }),
                ee = (e, t, a, s) => n.useMemo(() => {
                    let n = new X,
                        l = (null == t ? void 0 : t.isMediaChannel()) === !0;
                    return null != e && null != t && !l && n.addStep(q(e, t, s)), !l && n.addStep(Z(t)), n.addStep(Q(t)), n.addStep(J(t)), n.addStep($(a, l, null == e ? void 0 : e.id)), n
                }, [t, e, a, s]),
                et = (e, t) => n.useCallback(() => (t(!1), L.default.hideAdminOnboarding(e, !0)), [e, t]),
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
                        F.ComponentDispatch.dispatch(G.ComponentActions.REMEASURE_TARGET)
                    }, []);
                    n.useEffect(() => {
                        i()
                    }, [i, t, a, s, null == l ? void 0 : l.roles, r.id, r.permissionOverwrites])
                },
                ei = () => {
                    let [e, t] = n.useState(!0), a = (0, h.useStateFromStores)([_.default], () => _.default.useReducedMotion), s = (0, u.useTransition)(e, {
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
                    let t = (0, h.useStateFromStores)([_.default], () => _.default.useReducedMotion);
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
                        className: W.rolesList,
                        "aria-label": V.default.Messages.ROLES_LIST.format({
                            numRoles: a.length
                        }),
                        children: a.map(e => (0, s.jsx)(x.MemberRole, {
                            role: e,
                            canRemove: !1,
                            onRemove: G.NOOP_NULL,
                            guildId: t.id,
                            className: W.rolePill
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
                    } = e, [r, i] = n.useState(!1), o = (0, k.isOnboardingDismissed)(a.id), u = (0, h.useStateFromStores)([b.default], () => b.default.hasHidden(a.id)), d = ee(t, a, s, i), c = d.isAllDone(), m = o || u || !ea(a.id);
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
                        className: W.closeButton,
                        "aria-label": V.default.Messages.DISMISS,
                        children: (0, s.jsx)(p.default, {
                            className: W.closeIcon
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
                        className: W.closeButton,
                        "aria-label": t ? V.default.Messages.COLLAPSE : V.default.Messages.EXPAND,
                        children: t ? (0, s.jsx)(M.default, {
                            className: W.closeIcon
                        }) : (0, s.jsx)(A.default, {
                            className: W.closeIcon
                        })
                    })
                };
            var eg = e => {
                let {
                    hasAnyThread: t,
                    channel: a
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
                } = (0, P.useForumChannelStore)(a.id), o = (0, h.useStateFromStores)([N.default], () => N.default.getGuild(a.getGuildId())), c = (0, D.useCanManageChannel)(a), {
                    transitions: m,
                    setVisible: g
                } = ei(), x = eo(l), _ = em(), T = et(a.id, g), {
                    onboardingSteps: S,
                    isDismissed: p,
                    isHidden: M,
                    isAllDone: A
                } = ec({
                    guild: o,
                    channel: a,
                    hasAnyThread: t,
                    handleHide: T
                }), F = !M && !p, b = (0, H.useForumPostComposerStoreApi)(), L = a.isMediaChannel(), y = e => b.getState().setOnboardingExpanded(e);
                return (el(A, F, T), er({
                    isAllDone: A,
                    isVisible: F,
                    canManageChannel: c,
                    guild: o,
                    channel: a
                }), es(p, M, g), n.useEffect(() => {
                    (!t || !F) && y(!0)
                }, []), null == o) ? null : F && c ? L ? t ? null : (0, s.jsx)(C.default, {
                    channel: a
                }) : (0, s.jsx)(s.Fragment, {
                    children: m((e, t) => t ? (0, s.jsx)(u.animated.div, {
                        style: e,
                        className: W.container,
                        children: (0, s.jsxs)("div", {
                            className: W.wrapper,
                            children: [(0, s.jsx)("div", {
                                className: W.headerRow,
                                children: (0, s.jsxs)(f.HeadingLevel, {
                                    component: (0, s.jsx)(f.Heading, {
                                        variant: "heading-md/semibold",
                                        children: V.default.Messages.GET_STARTED
                                    }),
                                    children: [(0, s.jsx)(f.Heading, {
                                        variant: "heading-md/medium",
                                        className: W.header,
                                        children: V.default.Messages.FORUM_CHANNEL_ONBOARDING_COMPLETED_COUNT.format({
                                            numCompleted: S.completedSteps.toString(),
                                            numSteps: S.steps.length.toString()
                                        })
                                    }), (0, s.jsxs)(f.Text, {
                                        variant: "text-xs/normal",
                                        className: W.visibilityInfo,
                                        children: [(0, s.jsx)(I.default, {
                                            width: 12,
                                            height: 12,
                                            className: W.icon
                                        }), V.default.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
                                    }), (0, s.jsx)(ef, {
                                        expanded: l,
                                        onClick: () => y(!l)
                                    }), (0, s.jsx)(eh, {
                                        handleHide: T
                                    })]
                                })
                            }), x((e, t) => t ? (0, s.jsx)(u.animated.div, {
                                style: e,
                                className: W.listContainer,
                                children: (0, s.jsx)("ol", {
                                    className: W.checklist,
                                    children: S.getSteps().map(e => (0, s.jsxs)(f.Clickable, {
                                        tag: "li",
                                        "aria-label": e.name,
                                        onClick: () => _(e),
                                        className: r(W.stepContainer, {
                                            [W.completed]: e.isDone
                                        }),
                                        children: [e.shouldWarn ? (0, s.jsx)(R.default, {
                                            color: d.default.STATUS_DANGER,
                                            className: W.stepStatus
                                        }) : e.isDone ? (0, s.jsx)(O.IconBadge, {
                                            color: d.default.STATUS_POSITIVE_BACKGROUND,
                                            icon: E.default,
                                            style: K,
                                            className: W.stepStatus
                                        }) : (0, s.jsx)(O.IconBadge, {
                                            disableColor: !0,
                                            icon: v.default,
                                            style: z,
                                            className: r(W.stepStatus, W.completed)
                                        }), (0, s.jsxs)("div", {
                                            className: W.step,
                                            children: [(0, s.jsx)(f.Text, {
                                                variant: "text-md/medium",
                                                color: e.isDone ? "header-secondary" : "header-primary",
                                                className: W.stepName,
                                                children: e.name
                                            }), (0, s.jsx)(f.Text, {
                                                variant: "text-sm/normal",
                                                color: "header-secondary",
                                                className: W.stepDescription,
                                                children: e.description
                                            }), e.children]
                                        }), (0, s.jsx)(j.default, {
                                            width: 12,
                                            className: W.stepStatus
                                        })]
                                    }, "onboard-step-".concat(e.index)))
                                })
                            }) : null)]
                        })
                    }) : null)
                }) : t ? null : (0, s.jsx)(w.default, {
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
                    tagFilter: _,
                    channel: T
                } = e, S = (0, c.useCanManageChannel)(T), C = (0, r.useCanStartThread)(T), N = T.isMediaChannel(), E = n.useCallback(() => {
                    (0, m.trackForumUpsellModalViewed)(), (0, l.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("135430").then(a.bind(a, "135430"));
                        return t => (0, s.jsx)(e, {
                            ...t,
                            guildId: x
                        })
                    })
                }, [x]), p = _.size > 0, M = C || S, A = !p && S && !N, I = n.useCallback(() => A ? E() : C ? void d.ComponentDispatch.dispatch(h.ComponentActions.FOCUS_COMPOSER_TITLE) : (0, h.NOOP_NULL)(), [E, A, C]);
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
                        children: p ? f.default.Messages.FORUM_NO_POST_WITH_TAG_TITLE.format({
                            numTags: _.size
                        }) : f.default.Messages.FORUM_EMPTY_STATE_TITLE
                    }), (0, s.jsx)(l.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: p ? f.default.Messages.FORUM_NO_POST_WITH_TAG_DESCRIPTION.format({
                            numTags: _.size
                        }) : f.default.Messages.FORUM_EMPTY_STATE_DESCRIPTION.format({
                            channelName: t
                        })
                    }), M && (0, s.jsxs)(l.Button, {
                        look: l.Button.Looks.BLANK,
                        size: l.Button.Sizes.MIN,
                        color: l.Button.Colors.GREEN,
                        onClick: I,
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
                    return p
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
                _ = a("680986"),
                T = a("578198"),
                S = a("49111"),
                C = a("782340"),
                N = a("743344"),
                E = a("632215"),
                p = n.memo(function(e) {
                    let {
                        channel: t,
                        onChange: l
                    } = e, p = (0, T.useForumPostComposerStoreApi)(), {
                        guidelinesOpen: M
                    } = (0, T.useForumPostComposerStore)(e => {
                        let {
                            guidelinesOpen: t
                        } = e;
                        return {
                            guidelinesOpen: t
                        }
                    }), A = (0, _.useCanManageChannel)(t), [I, v] = n.useState(!1), j = n.useCallback(e => {
                        if (null == e) return;
                        let t = e.clientHeight >= 220;
                        t !== I && v(t)
                    }, [I]);
                    n.useLayoutEffect(() => {
                        setTimeout(l, 350)
                    }, [M, l]);
                    let R = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion),
                        [O, F] = n.useState(!M),
                        b = (0, i.useSpring)({
                            opacity: M ? 1 : 0,
                            maxHeight: M ? 500 : 0,
                            config: {
                                duration: 300
                            },
                            immediate: R,
                            onRest: () => F(!M)
                        }),
                        L = null != t.topic && t.topic.length > 0;
                    return L ? (0, s.jsx)(i.animated.div, {
                        style: b,
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
                                    }), C.default.Messages.FORUM_POST_GUIDELINES_TITLE, A && (0, s.jsx)(u.Clickable, {
                                        onClick: () => {
                                            d.default.open(t.id, void 0, S.ChannelSettingsSubsections.TOPIC)
                                        },
                                        tag: "span",
                                        className: N.clickable,
                                        children: (0, s.jsx)(x.default, {
                                            width: 16,
                                            height: 16
                                        })
                                    })]
                                }), (0, s.jsx)(u.Clickable, {
                                    "aria-label": C.default.Messages.CLOSE,
                                    className: N.clickable,
                                    onClick: () => {
                                        p.getState().setGuidelinesOpen(!1)
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
                                    className: r(N.guidelines, E.markup),
                                    children: (0, s.jsx)("div", {
                                        ref: j,
                                        children: m.default.parseForumPostGuidelines(t.topic, !0, {
                                            channelId: t.id,
                                            allowHeading: !0,
                                            allowList: !0
                                        })
                                    })
                                }), I && (0, s.jsxs)("div", {
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
                                                children: [C.default.Messages.FORUM_CHANNEL_TOPIC_VIEW_ALL, (0, s.jsx)(g.default, {
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
                    return S
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
                _ = a("260177"),
                T = a("714358");

            function S(e) {
                let {
                    onDismiss: t
                } = e;
                return (0, s.jsxs)(r.Clickable, {
                    onClick: () => {
                        open(m.COMMUNITY_PORTAL_FORUM_PAGE), (0, d.trackForumHelperCardClicked)({
                            readGuideCta: !0
                        })
                    },
                    className: l(_.container, x.container, g.mainCard),
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
                                className: l(_.channelName, x.title),
                                variant: "heading-lg/semibold",
                                color: "header-primary",
                                children: f.default.Messages.FORUM_HELPER_CARD_TITLE
                            }), (0, s.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: f.default.Messages.FORUM_HELPER_CARD_BODY
                            })]
                        }), (0, s.jsx)("img", {
                            src: T,
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
                _ = a("585722"),
                T = a("840817"),
                S = a("659500"),
                C = a("412861"),
                N = a("867965"),
                E = a("49111"),
                p = a("572228");
            let M = {
                    scale: .95,
                    opacity: 0
                },
                A = {
                    scale: 1,
                    opacity: 1
                },
                I = {
                    scale: 1,
                    opacity: 1
                },
                v = {
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
                    className: p.uploadInput,
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
                        className: p.fileInput,
                        ref: c,
                        onChange: e => {
                            null == l || l(), (0, C.promptToUpload)(e.currentTarget.files, m, x.DraftType.FirstThreadMessage, {
                                requireConfirm: !0
                            }), S.ComponentDispatch.dispatch(E.ComponentActions.TEXTAREA_FOCUS), e.currentTarget.value = null
                        },
                        multiple: m.rateLimitPerUser <= 0,
                        tabIndex: -1,
                        "aria-hidden": !0
                    }), (0, s.jsx)(T.default, {
                        width: 28,
                        height: 28,
                        className: p.uploadIcon
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
                    to: I,
                    config: v
                }), x = (0, o.useStateFromStores)([c.default], () => c.default.keyboardModeEnabled), T = (0, o.useStateFromStores)([_.default], () => _.default.getUploads(t, m.ChatInputTypes.CREATE_FORUM_POST.drafts.type));
                return (0, s.jsx)(i.animated.div, {
                    className: p.popoutContainer,
                    onMouseLeave: () => {
                        !l && a()
                    },
                    style: g,
                    children: (0, s.jsxs)(u.ScrollerThin, {
                        orientation: "horizontal",
                        className: p.popout,
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
                            className: p.uploads,
                            children: T.map(e => (0, s.jsx)(f.default, {
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
                } = e, [a, l] = n.useState(!1), r = (0, o.useStateFromStores)([_.default], () => _.default.getUploads(t, m.ChatInputTypes.CREATE_FORUM_POST.drafts.type)), i = r.length, u = i > 0;
                n.useEffect(() => {
                    a && !u && l(!1)
                }, [a, u]);
                let d = () => {
                    u && l(!0)
                };
                return (0, s.jsxs)("div", {
                    className: p.container,
                    children: [u ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(f.UploadIcon, {
                            upload: r[0],
                            size: h.AttachmentListItemSizes.SMALL,
                            onMouseEnter: d
                        }), !a && (0, s.jsx)("div", {
                            className: p.badge,
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
                _ = a("740483"),
                T = a("681060"),
                S = a("830618"),
                C = a("939563"),
                N = a("236003"),
                E = a("549558"),
                p = a("884351"),
                M = a("328511"),
                A = a("467094"),
                I = a("24337"),
                v = a("967241"),
                j = a("517141"),
                R = a("474643"),
                O = a("957255"),
                F = a("401848"),
                b = a("585722"),
                L = a("697218"),
                y = a("837899"),
                P = a("213523"),
                D = a("381546"),
                U = a("660074"),
                k = a("987772"),
                w = a("229915"),
                H = a("547896"),
                B = a("378765"),
                G = a("718422"),
                V = a("412861"),
                W = a("119161"),
                z = a("404607"),
                K = a("706065"),
                Y = a("680986"),
                X = a("867965"),
                q = a("532308"),
                Z = a("1999"),
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
                }, u.default), [f, g] = n.useState(null), x = n.useContext(B.ComponentDispatchGroupContext), _ = n.useCallback(() => {
                    x.bumpDispatchPriority()
                }, [x]), T = (0, m.useStateFromStores)([O.default], () => O.default.can(ea.Permissions.ATTACH_FILES, t)), S = (0, m.useStateFromStoresArray)([b.default], () => b.default.getUploads(t.id, R.DraftType.FirstThreadMessage)), C = c && T && i, I = (null == t ? void 0 : t.isMediaChannel()) === !0, F = function(e, t) {
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
                            }, 0), (o && r.length > 0 || i.textValue.trim().length > 0 && i.textValue.trim() !== s || b.default.getUploads(e.id, R.DraftType.FirstThreadMessage).length > 0) && l())
                        }, [a, e.id, s, t]);
                    return l
                }(t, o), L = function(e) {
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
                        } = p.default.parse(e, t);
                        if (t = i, null == s || 0 === s.length) {
                            var o;
                            s = null === (o = M.default.getStickerPreview(e.id, er.drafts.type)) || void 0 === o ? void 0 : o.map(e => e.id)
                        }
                        if ((null == n || 0 === n.length) && (n = b.default.getUploads(e.id, R.DraftType.FirstThreadMessage)), null != n && n.length > 0 && e.isMediaChannel()) {
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
                        if (!c) return (0, X.trackForumCreateNewPostClick)({
                            guildId: e.guild_id,
                            channelId: e.id
                        }), !g && a.getState().setGuidelinesOpen(!0), h(), {
                            shouldClear: !1,
                            shouldRefocus: !1
                        };
                        let {
                            content: x,
                            stickers: _,
                            uploads: T,
                            hasNameError: S,
                            hasMessageError: C
                        } = l(t, n, r);
                        if (i(S ? (0, W.makeEmptyTitleError)() : null), o(C ? (0, W.makeEmptyMessageError)() : null), S || C) return {
                            shouldClear: !1,
                            shouldRefocus: !0
                        };
                        try {
                            u(!0);
                            let {
                                valid: t
                            } = await (0, G.applyChatRestrictions)({
                                content: x,
                                stickers: _,
                                uploads: T,
                                type: er,
                                channel: e
                            });
                            if (!t) return {
                                shouldClear: !1,
                                shouldRefocus: !0
                            };
                            let a = await s(x, _, T);
                            return (0, v.openThreadSidebarForViewing)(a), z.default.resort(e.id), (0, A.clearStickerPreview)(e.id, er.drafts.type), d(), m(!1), K.default.markAsSeen(e.id), f(!1), {
                                shouldClear: !0,
                                shouldRefocus: !1
                            }
                        } catch (t) {
                            var N, E;
                            return (null === (N = t.body) || void 0 === N ? void 0 : N.code) === ea.AbortCodes.AUTOMOD_TITLE_BLOCKED ? i((0, W.makeAutomodViolationError)(t.body, e)) : (null === (E = t.body) || void 0 === E ? void 0 : E.code) === ea.AbortCodes.AUTOMOD_MESSAGE_BLOCKED && o((0, W.makeAutomodViolationError)(t.body, e)), {
                                shouldClear: !1,
                                shouldRefocus: !0
                            }
                        } finally {
                            u(!1)
                        }
                    }, [s, l, e, a])
                }(t);
                return n.useLayoutEffect(l, [c, d, S, l]), (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("div", {
                        "aria-label": i ? en.default.Messages.NEW_FORUM_POST : en.default.Messages.SEARCH,
                        className: r(el.container, {
                            [el.collapsed]: !c
                        }),
                        onClick: !c && i ? F : void 0,
                        children: (0, s.jsxs)("form", {
                            onMouseDown: _,
                            onFocus: _,
                            onSubmit: e => {
                                e.preventDefault(), i && L()
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
                                        submit: L,
                                        disabled: !i
                                    })]
                                }), C && (I ? (0, s.jsx)(E.MediaPostThumbnail, {
                                    parentChannel: t
                                }) : (0, s.jsx)(Z.default, {
                                    channelId: t.id
                                }))]
                            }), (0, s.jsxs)("div", {
                                className: el.form,
                                children: [C && I && (0, s.jsx)(N.default, {
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
                    textAreaState: _,
                    hasClickedForm: T,
                    submitting: S
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
                }, u.default), C = (0, Q.useForumPostComposerStoreApi)(), N = null != t.topic && 0 !== t.topic.length, E = K.default.hasSeen(t.id), p = (0, Y.useChannelTemplate)(t), M = (0, m.useStateFromStores)([L.default], () => L.default.getCurrentUser());
                o(null != M, "current user cannot be null");
                (0, B.useComponentAction)({
                    event: ea.ComponentActions.FOCUS_COMPOSER_TITLE,
                    handler: () => {
                        var e;
                        let t = l.current instanceof h.TextAreaAutosize ? null === (e = l.current) || void 0 === e ? void 0 : e._textArea : l.current;
                        null == t || t.focus(), C.getState().setTitleFocused(!0), C.getState().setFormOpen(!0), C.getState().setHasClickedForm(!0)
                    }
                });
                let A = n.useCallback(() => {
                        var e;
                        C.getState().resetFormState(), f.default.clearDraft(t.id, R.DraftType.ThreadSettings), f.default.clearDraft(t.id, R.DraftType.FirstThreadMessage), g.default.clearAll(t.id, R.DraftType.FirstThreadMessage), C.getState().setFormOpen(!1), C.getState().setBodyFocused(!1), C.getState().setTitleFocused(!1), C.getState().setHasClickedForm(!1), null === (e = l.current) || void 0 === e || e.blur(), (0, X.trackForumNewPostCleared)({
                            guildId: t.guild_id,
                            channelId: t.id
                        })
                    }, [C, t.id, t.guild_id, l]),
                    v = n.useMemo(() => a && !d ? (0, s.jsx)(eg, {}) : a || d || 0 !== _.textValue.trim().length && _.textValue.trim() !== p ? !d && (x.trim().length > 0 || _.textValue.trim().length > 0 && _.textValue.trim() !== p || b.default.getUploads(t.id, R.DraftType.FirstThreadMessage).length > 0) && T ? (0, s.jsx)(k.default, {
                        className: el.pencilIcon,
                        width: 24,
                        height: 24
                    }) : S ? (0, s.jsx)(D.default, {
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
                    }) : (0, s.jsx)(w.default, {
                        className: el.searchIcon,
                        width: 24,
                        height: 24
                    }), [a, d, T, x, _.textValue, A, t.id, p, S]),
                    j = n.useCallback(e => {
                        let a = e.clipboardData.files[0];
                        null != a && a.type.startsWith("image/") && (e.preventDefault(), (0, V.promptToUpload)([a], t, R.DraftType.FirstThreadMessage), C.getState().setFormOpenFromUserAction())
                    }, [t, C]),
                    O = (0, W.renderError)(c, {
                        content: x
                    });
                return (0, s.jsxs)("div", {
                    className: el.titleContainer,
                    onPaste: j,
                    children: [(0, s.jsx)("div", {
                        className: el.prefixElement,
                        children: v
                    }), (0, s.jsx)(h.TextArea, {
                        value: x,
                        placeholder: r ? d || _.textValue.length > 0 && _.textValue.trim() !== p ? en.default.Messages.FORUM_POST_TITLE_PLACEHOLDER_FOCUSED : en.default.Messages.FORUM_POST_TITLE_PLACEHOLDER_SEARCH : en.default.Messages.SEARCH,
                        flex: !0,
                        autosize: d,
                        rows: 1,
                        showCharacterCount: !1,
                        showRemainingCharacterCount: !1,
                        maxLength: ea.MAX_CHANNEL_NAME_LENGTH,
                        onChange: e => {
                            let a = (0, I.default)(e, !1);
                            C.getState().setName(a);
                            let s = 0 === a.trim().length,
                                n = 0 === _.textValue.trim().length,
                                l = _.textValue.trim() === p;
                            s && (n || l) && C.getState().setHasClickedForm(!1), !d && z.default.updateForumSearchQuery(t.id, a)
                        },
                        onFocus: () => {
                            C.getState().setTitleFocused(!0), C.getState().setBodyFocused(!1)
                        },
                        onBlur: () => {
                            C.getState().setTitleFocused(!1);
                            let e = (0, I.default)(x, !0);
                            e !== x && (C.getState().setName(e), !d && z.default.updateForumSearchQuery(t.id, e))
                        },
                        onKeyDown: e => {
                            var a, s;
                            "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), d && x.length > 0 ? null == i || i.focus() : r && e.shiftKey && ((0, X.trackForumCreateNewPostKeybindUsed)({
                                guildId: t.guild_id,
                                channelId: t.id
                            }), N && !E && C.getState().setGuidelinesOpen(!0), C.getState().setFormOpenFromUserAction(), x.trim().length > 0 && (C.getState().setBodyFocused(!0), null == i || i.focus())));
                            let n = l.current instanceof h.TextAreaAutosize ? null === (a = l.current) || void 0 === a ? void 0 : a._textArea : l.current;
                            if ("Home" === e.key || "End" === e.key) {
                                if (null == n) return;
                                if (e.preventDefault(), e.stopPropagation(), "Home" === e.key) n.setSelectionRange(0, 0);
                                else {
                                    let e = x.length;
                                    n.setSelectionRange(e, e)
                                }
                            }
                            "Escape" === e.key && !C.getState().submitting && (null === (s = l.current) || void 0 === s || s.blur(), C.getState().setFormOpen(!1), C.getState().setTitleFocused(!1), C.getState().setBodyFocused(!1))
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
                    } = e, c = (0, m.useStateFromStores)([L.default], () => L.default.getCurrentUser());
                    o(null != c, "current user cannot be null");
                    let {
                        messageError: f,
                        textAreaState: g,
                        bodyFocused: x,
                        formOpen: _
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
                    }, u.default), S = (0, Q.useForumPostComposerStoreApi)();
                    n.useEffect(() => () => (0, X.maybeTrackForumNewPostDraftCreated)({
                        guildId: t.guild_id,
                        channelId: t.id
                    }), [t.guild_id, t.id]);
                    let N = n.useCallback(() => {
                            S.getState().setBodyFocused(!0)
                        }, [S]),
                        E = n.useCallback(() => {
                            S.getState().setBodyFocused(!1)
                        }, [S]),
                        p = n.useCallback((e, t, a) => {
                            let {
                                setTextAreaState: s
                            } = S.getState();
                            s({
                                textValue: t,
                                richValue: a
                            })
                        }, [S]),
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
                        handler: E
                    });
                    let A = (0, W.renderError)(f, {
                        content: g.textValue
                    });
                    return (0, s.jsx)("div", {
                        className: el.bodyContainer,
                        children: (0, s.jsxs)("div", {
                            className: el.contentContainer,
                            children: [(0, s.jsx)("div", {
                                onClick: N,
                                children: (0, s.jsx)(T.default, {
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
                                    onChange: p,
                                    onSubmit: M,
                                    promptToUpload: V.promptToUpload,
                                    disabled: l,
                                    onKeyDown: e => {
                                        if (("ArrowUp" === e.key || "ArrowDown" === e.key) && e.stopPropagation(), "Home" === e.key || "End" === e.key) {
                                            if (null == i) return;
                                            e.preventDefault(), e.stopPropagation();
                                            let t = i.getSlateEditor();
                                            if (null == t) return;
                                            "Home" === e.key ? C.SlateTransforms.resetSelectionToStart(t) : C.SlateTransforms.resetSelectionToEnd(t)
                                        }
                                        if (_ && "Escape" === e.key && !S.getState().submitting) null == i || i.blur(), S.getState().setFormOpen(!1), S.getState().setTitleFocused(!1), S.getState().setBodyFocused(!1)
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
                    } = t, d = u > 0, c = (0, m.useStateFromStores)([F.default], () => F.default.getSlowmodeCooldownGuess(t.id, F.SlowmodeType.CreateThread)), f = (0, m.useStateFromStores)([O.default], () => O.default.can(ea.Permissions.MANAGE_THREADS, t) || O.default.can(ea.Permissions.MANAGE_CHANNELS, t)), g = t.hasFlag(es.ChannelFlags.REQUIRE_TAG) && 0 === i.size && o.length > 0 && r.textValue.length > 0, x = (0, Q.useForumPostComposerStoreApi)(), T = n.useCallback(() => {
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
                                    }), (0, s.jsx)(S.default, {
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
                            }), (0, s.jsx)(_.default, {
                                type: er,
                                className: el.expressionPicker,
                                onClick: T
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
                }), c = t.hasFlag(es.ChannelFlags.REQUIRE_TAG) && 0 === u.size && o.length > 0 && i.textValue.length > 0, f = (0, m.useStateFromStoresArray)([b.default], () => b.default.getUploads(t.id, R.DraftType.FirstThreadMessage)), g = i.textValue.trim().length > 0 || f.length > 0, x = !c && g && o.trim().length > 0;
                if (__OVERLAY__) return null;
                let _ = function() {
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
                return a ? _() : (0, s.jsx)(h.Tooltip, {
                    text: en.default.Messages.FORUM_NO_POST_PERMISSION_HELP,
                    children: e => _(e)
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
                } = (0, ee.default)(), x = n.useRef(null), [_, T] = n.useState(!0), S = (0, Y.useVisibleForumTags)(t), [C, N] = n.useState(0);
                return (n.useLayoutEffect(() => {
                    var e;
                    let t = x.current,
                        a = null == t ? void 0 : null === (e = t.children) || void 0 === e ? void 0 : e[0],
                        s = null == t || null == a || a.clientHeight > t.clientHeight;
                    if (s !== _ && T(s), s && null != f.current && null != a && null != a.children) {
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
                }, [S, _, f, g]), 0 === S.length) ? null : (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("div", {
                        className: el.tagsContainer,
                        ref: f,
                        children: [(0, s.jsx)(H.default, {
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
                                            children: S.map(e => (0, s.jsx)(J.default, {
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
                        }), _ && (0, s.jsx)(h.Popout, {
                            onRequestOpen: () => i(!0),
                            onRequestClose: () => i(!1),
                            renderPopout: e => {
                                let {
                                    closePopout: n
                                } = e;
                                return (0, s.jsx)(q.default, {
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
                                    left: C
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
                _ = a("845579"),
                T = a("982108"),
                S = a("42203"),
                C = a("957255"),
                N = a("594098"),
                E = a("887718"),
                p = a("95689"),
                M = a("132755"),
                A = a("497880"),
                I = a("956089"),
                v = a("680986"),
                j = a("612278"),
                R = a("791234"),
                O = a("512630"),
                F = a("152637"),
                b = a("363622"),
                L = a("855455"),
                y = a("136460"),
                P = a("601016"),
                D = a("485055"),
                U = a("390083"),
                k = a("953371"),
                w = a("49111"),
                H = a("782340"),
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
                    } = e, m = (0, o.useStateFromStores)([S.default], () => S.default.getChannel(a));
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
                } = e, E = (0, o.useStateFromStores)([S.default], () => S.default.getChannel(a.parent_id)), p = a.id, M = n.useRef(null), A = (0, o.useStateFromStores)([T.default], () => T.default.getCurrentSidebarChannelId(a.parent_id) === a.id), {
                    firstMessage: O,
                    loaded: L
                } = (0, j.useFirstForumPostMessage)(a), {
                    firstMedia: G
                } = (0, v.useForumPostFirstMessageMarkup)({
                    firstMessage: O,
                    formatInline: !1,
                    noStyleAndInteraction: !1
                }), {
                    messageCountText: V
                } = (0, v.useMessageCount)(a), {
                    isNew: z,
                    hasUnreads: K
                } = (0, v.useForumPostReadStates)(a), X = n.useRef(null), {
                    handleLeftClick: Z,
                    handleRightClick: Q
                } = (0, U.default)({
                    facepileRef: X,
                    goToThread: l,
                    channel: a
                });
                n.useEffect(() => {
                    null == N || N(M.current, p)
                }, [N, p]);
                let J = (0, o.useStateFromStores)([C.default], () => C.default.can(w.Permissions.MANAGE_MESSAGES, a)),
                    $ = _.GifAutoPlay.useSetting(),
                    ee = _.RenderSpoilers.useSetting(),
                    et = (0, g.default)(ee, J),
                    ea = (0, R.useForumPostMediaThumbnail)(O, E, !1),
                    [es, en] = (0, b.getFrameDimensions)(h.width - 2 * b.IMAGE_PADDING),
                    el = (0, v.useLastActiveTimestamp)(a, i.ThreadSortOrder.CREATION_DATE, k.ForumTimestampFormats.POSTED_DURATION_AGO),
                    er = (0, F.useHighlightedChannelName)(a),
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
                    onClick: Z,
                    onFocus: eo,
                    onContextMenu: Q,
                    className: r(B.container, m, {
                        [B.isOpen]: A
                    }),
                    style: {
                        ...h
                    },
                    children: [(0, s.jsx)(d.Clickable, {
                        onClick: Z,
                        focusProps: {
                            ringTarget: M
                        },
                        onContextMenu: Q,
                        "aria-label": H.default.Messages.FORUM_POST_ARIA_LABEL.format({
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
                            }), z ? (0, s.jsx)(I.TextBadge, {
                                className: r(B.newBadge),
                                color: u.default.unsafe_rawColors.BRAND_260.css,
                                text: H.default.Messages.NEW
                            }) : null]
                        }), (0, s.jsx)(d.HeadingLevel, {
                            children: (0, s.jsx)(d.Heading, {
                                variant: "heading-md/extrabold",
                                className: B.title,
                                color: K ? "header-primary" : "text-muted",
                                style: {
                                    width: "".concat(h.width - 2 * b.GRID_POST_CONTROLS_MARGIN, "px")
                                },
                                children: er
                            })
                        })]
                    }), (0, s.jsx)("div", {
                        className: B.postBody,
                        children: (0, s.jsx)(d.FocusBlock, {
                            children: ei ? (0, s.jsx)(q, {
                                channel: a,
                                firstMessage: O,
                                isFirstMessageLoaded: L,
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
                            children: (0, s.jsx)(W, {
                                channel: a,
                                firstMessage: O,
                                facepileRef: X
                            })
                        })
                    })]
                })
            }

            function W(e) {
                let {
                    channel: t,
                    facepileRef: a,
                    firstMessage: n
                } = e, l = (0, v.useTypingUserIds)(t), r = (null == n ? void 0 : n.reactions) != null && n.reactions.length > 0;
                return (0, s.jsxs)("div", {
                    className: B.forumPostControls,
                    children: [(0, s.jsxs)("div", {
                        className: B.controlsGroup,
                        children: [(0, s.jsx)("div", {
                            className: B.messageCountContainer,
                            children: (0, s.jsx)(F.MessageCount, {
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
                                children: [(0, s.jsx)(F.Facepile, {
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
                        children: [r || null == n ? null : (0, s.jsx)(F.DefaultReaction, {
                            firstMessage: n,
                            channel: t
                        }), null == n ? null : (0, s.jsx)(F.MostUsedReaction, {
                            firstMessage: n,
                            channel: t
                        })]
                    })]
                })
            }
            let z = e => e.preventDefault(),
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
                    } = n.useMemo(() => (0, R.messageContainsGifOrVideo)(t), [t]), g = n.useMemo(() => t.slice(L.MOSAIC_MIN_INDEX, L.MOSAIC_MAX_INDEX), [t]), x = (0, L.useImageContainerStyles)({
                        numAttachments: g.length,
                        containerWidth: l,
                        containerHeight: i
                    }), _ = (0, L.useImageDimensionStyles)({
                        imageContainerStyles: x,
                        containerWidth: l,
                        containerHeight: i
                    }), T = n.useMemo(() => g.map((e, t) => {
                        var n;
                        let [l, i] = (0, f.getForumPostShouldObscure)(e, !a), g = (0, f.getObscuredAlt)(i), T = {
                            ..._[t],
                            src: e.src,
                            width: e.width,
                            height: e.height,
                            alt: null != e.alt && l ? g : e.alt,
                            onClick: z,
                            shouldRenderAccessory: !c && !d
                        }, S = (0, h.isAnimatedImageUrl)(e.src) ? "".concat(e.src, "?format=png") : e.src, C = o && !l ? e.src : S;
                        return (0, s.jsxs)("div", {
                            className: B.bodyMediaFrame,
                            style: x[t],
                            children: [u ? (0, s.jsx)(m.default, {
                                ...T,
                                src: C,
                                backgroundSrc: S,
                                aspectRatio: T.maxWidth / T.maxHeight,
                                alt: null !== (n = T.alt) && void 0 !== n ? n : "",
                                className: r(B.mediaPostContainer, {
                                    [B.obscured]: l
                                }),
                                imageChildClassName: B.mediaPostThumbnail
                            }) : e.src.startsWith("data:") ? (0, s.jsx)(N.default, {
                                ...T,
                                className: B.mediaContainer,
                                imageClassName: r(B.thumbnailOverride, {
                                    [B.obscured]: l
                                })
                            }) : (0, s.jsx)(K, {
                                ...T,
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
                    }), [o, c, d, a, x, _, g, u]);
                    return (0, s.jsxs)("div", {
                        className: B.bodyMedia,
                        style: {
                            width: l,
                            height: i
                        },
                        children: [(0, s.jsx)(s.Fragment, {
                            children: T
                        }), (c || d) && (0, s.jsxs)("div", {
                            className: B.mediaIconsRow,
                            children: [d && (0, s.jsx)(M.default, {
                                width: "22px",
                                height: "22px",
                                className: B.mediaIcon
                            }), c && (0, s.jsx)(E.default, {
                                className: B.mediaIcon
                            })]
                        }), t.length > L.MOSAIC_MAX_IMAGE_COUNT && (0, s.jsx)(X, {
                            text: (t.length - (0, L.MOSAIC_MAX_IMAGE_COUNT)).toString(),
                            icon: p.default,
                            pillClassName: B.moreImagesPill,
                            iconClassName: B.moreImagesPillIcon,
                            textClassName: B.moreImagesPillText
                        })]
                    })
                });

            function X(e) {
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

            function q(e) {
                let {
                    channel: t,
                    firstMessage: a,
                    isFirstMessageLoaded: l,
                    containerWidth: i,
                    hasUnreads: o
                } = e, [u, c] = (0, b.getFrameDimensions)(i - 2 * b.IMAGE_PADDING), {
                    content: m
                } = (0, v.useForumPostFirstMessageMarkup)({
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
                                children: H.default.Messages.REPLY_QUOTE_MESSAGE_DELETED
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
                    return eF
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
                _ = a("125667"),
                T = a("225664"),
                S = a("731898"),
                C = a("419135"),
                N = a("206230"),
                E = a("692171"),
                p = a("651693"),
                M = a("605160"),
                A = a("875978"),
                I = a("70845"),
                v = a("913491"),
                j = a("95045"),
                R = a("574073"),
                O = a("359132"),
                F = a("836943"),
                b = a("933629"),
                L = a("592707"),
                y = a("350134"),
                P = a("232259"),
                D = a("144491"),
                U = a("208021"),
                k = a("582713"),
                w = a("300322"),
                H = a("845579"),
                B = a("982108"),
                G = a("42203"),
                V = a("957255"),
                W = a("660478"),
                z = a("27618"),
                K = a("471671"),
                Y = a("738107"),
                X = a("952368"),
                q = a("491605"),
                Z = a("505684"),
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
                e_ = a("810758"),
                eT = a("390083"),
                eS = a("49111"),
                eC = a("724210"),
                eN = a("648564"),
                eE = a("719347"),
                ep = a("782340"),
                eM = a("552175"),
                eA = a("590787"),
                eI = a("632215");
            let ev = 26,
                ej = 162 + ev,
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
                    children: [(0, s.jsx)(q.default, {
                        importData: eR,
                        shouldAnimate: t && !a,
                        className: eM.wavingHand
                    }), (0, s.jsx)(x.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: ep.default.Messages.FORUM_START_THE_CONVERSATION_HEADER
                    })]
                })
            }
            var eF = n.memo(function(e) {
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
                    firstMessage: _,
                    firstMessageLoaded: T,
                    firstMedia: C,
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
                }), E = (0, f.useStateFromStores)([G.default], () => G.default.getChannel(d.parent_id)), {
                    ref: p,
                    height: M
                } = (0, S.default)(), A = (0, eh.useForumPostComposerStore)(e => e.setCardHeight), [I, v] = n.useState(162);
                n.useEffect(() => {
                    null != M && (A(a, M + ev), v(M))
                }, [p, M, A, a, v, T]), n.useEffect(() => {
                    null == i || i(u.current, a)
                }, [i, a, T]);
                let j = n.useRef(null),
                    {
                        handleLeftClick: R,
                        handleRightClick: O
                    } = (0, eT.default)({
                        facepileRef: j,
                        goToThread: l,
                        channel: d
                    }),
                    {
                        role: F,
                        onFocus: b,
                        ...L
                    } = (0, c.useListItem)(a),
                    {
                        handleFocus: y,
                        handleBlur: P
                    } = (0, e_.default)(b);
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
                        "aria-label": ep.default.Messages.FORUM_POST_ARIA_LABEL.format({
                            title: d.name,
                            count: h
                        }),
                        className: eM.focusTarget,
                        onFocus: y,
                        onBlur: P,
                        ...L
                    }), (0, s.jsxs)("div", {
                        className: eM.body,
                        children: [(0, s.jsx)("div", {
                            ref: p,
                            className: eM.contentContainer,
                            children: T ? (0, s.jsx)(eb, {
                                parentChannel: E,
                                channel: d,
                                firstMessage: _,
                                messageCount: h,
                                unreadCount: g,
                                facepileRef: j,
                                onClick: R
                            }) : (0, s.jsx)(ef.ForumPostContentPlaceholder, {})
                        }), T ? (null == _ ? void 0 : _.blocked) || null == C ? null : (0, s.jsx)(eG, {
                            channel: d,
                            firstMedia: C,
                            firstMessage: _,
                            isEmbed: N,
                            contentHeight: I
                        }) : (0, s.jsx)(ef.ForumPostMediaPreviewPlaceholder, {})]
                    })]
                })
            });

            function eb(e) {
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
                        }), null != n && (0, s.jsx)(eL, {
                            firstMessage: n
                        })]
                    }), (0, s.jsxs)("div", {
                        className: eM.engagement,
                        children: [null != n && (0, s.jsx)(ek, {
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

            function eL(e) {
                let {
                    firstMessage: t
                } = e, a = (0, f.useStateFromStores)([z.default], () => null != t && z.default.isBlocked(t.author.id)), {
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
                    children: a ? ep.default.Messages.FORUM_POST_BLOCKED_FIRST_MESSAGE : null == l ? ep.default.Messages.REPLY_QUOTE_MESSAGE_DELETED : l
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
                } = (0, er.useMostRecentForumMessage)(t, a), d = (0, f.useStateFromStores)([V.default], () => V.default.can(eS.Permissions.SEND_MESSAGES_IN_THREADS, a)), {
                    hasUnreads: c
                } = (0, el.useForumPostReadStates)(a), m = (0, f.useStateFromStores)([es.default], () => es.default.getFirstNoReplyThreadId()), h = (0, w.useIsNonModInLockedThread)(a), g = (0, R.useNullableMessageAuthor)(u);
                if (n > 0) {
                    var _, T;
                    return (0, s.jsxs)(x.Clickable, {
                        onClick: e => {
                            null != u && null != a.parent_id && (e.stopPropagation(), (0, eu.trackForumPostClicked)({
                                guildId: a.guild_id,
                                channelId: a.parent_id,
                                postId: a.id,
                                location: {
                                    page: eS.AnalyticsPages.GUILD_CHANNEL,
                                    section: eS.AnalyticsSections.FORUM_CHANNEL_POST
                                }
                            }), e.shiftKey ? (0, D.transitionToThreadMessage)(a, u.id, eN.OpenThreadAnalyticsLocations.BROWSER) : U.default.openThreadAsSidebar({
                                guildId: a.guild_id,
                                channelId: a.id,
                                baseChannelId: a.parent_id,
                                flash: !0,
                                details: {
                                    type: k.SidebarOpenDetailsType.THREAD,
                                    initialMessageId: u.id
                                }
                            }))
                        },
                        children: [(0, s.jsxs)(x.HiddenVisually, {
                            children: ["Latest message:", null != g ? null !== (_ = g.nick) && void 0 !== _ ? _ : ep.default.Messages.UNKNOWN_USER : null, " ", null == (T = null == u ? void 0 : u.content) ? "" : T.length > 120 ? "".concat(T.substring(0, 120), "...") : T]
                        }), (0, s.jsxs)(x.FocusBlock, {
                            className: eM.replies,
                            children: [(0, s.jsx)(ew, {
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
                        children: ep.default.Messages.THREAD_HEADER_NOTICE_ACTIVE_LOCKED
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
                    }), (0, s.jsx)(_.default, {
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
                        s = n.useMemo(() => (0, C.createASTHighlighter)(t && null != a ? a : ""), [t, a]),
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
                } = e, o = (0, R.useNullableMessageAuthor)(l), u = (0, f.useStateFromStores)([z.default], () => null != l && z.default.isBlocked(l.author.id)), d = (0, f.useStateFromStores)([V.default], () => V.default.can(eS.Permissions.MANAGE_MESSAGES, a)), c = H.RenderSpoilers.useSetting(), m = (0, ed.useIsRecentMessageDeleted)(a), {
                    content: h
                } = n.useMemo(() => (null == l ? void 0 : l.content) != null && "" !== l.content ? (0, j.default)(l, {
                    formatInline: !0,
                    noStyleAndInteraction: !0
                }) : {
                    content: null
                }, [l]), g = null != l && (0, v.default)(l), _ = null;
                if (u) _ = (0, s.jsx)(x.Text, {
                    className: eM.nonUserMessage,
                    variant: "text-sm/medium",
                    color: "text-muted",
                    children: ep.default.Messages.FORUM_POST_BLOCKED_MOST_RECENT_MESSAGE
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
                    } : (0, $.renderSingleLineMessage)(l, h, u, r(eM.mostRecentMessageContent, eI.inlineFormat, eI.smallFontSize), {
                        iconClass: eM.messageContentIcon,
                        iconSize: eE.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                    });
                    _ = null != t ? (0, s.jsx)(x.Text, {
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
                        children: ep.default.Messages.FORUM_CHANNEL_MOST_RECENT_MESSAGE_DELETED
                    }) : null
                }
                let T = null != o ? null !== (t = o.nick) && void 0 !== t ? t : ep.default.Messages.UNKNOWN_USER : null,
                    S = (0, P.useUsernameHook)(null == l ? void 0 : l.author, a.id, a.guild_id, !0)(null != o ? o : void 0)((0, s.jsxs)(s.Fragment, {
                        children: [null != T ? T : "", null != l ? ":" : ""]
                    }), a.id);
                return (0, s.jsx)(Z.ObscuredDisplayContext.Provider, {
                    value: (0, I.default)(c, d),
                    children: (0, s.jsxs)("div", {
                        className: eM.mostRecentMessage,
                        children: [null == T || g ? null : (0, s.jsx)("div", {
                            className: eM.mostRecentMessageAuthor,
                            children: (0, s.jsx)(x.Text, {
                                tag: "span",
                                variant: "text-sm/semibold",
                                children: S
                            })
                        }), (0, s.jsx)(x.FocusBlock, {
                            children: _
                        })]
                    })
                })
            });

            function ek(e) {
                let {
                    channel: t,
                    firstMessage: a
                } = e, l = (0, f.useStateFromStores)([G.default], () => G.default.getChannel(t.parent_id)), i = (0, el.useDefaultReactionEmoji)(l), {
                    disableReactionUpdates: o,
                    disableReactionCreates: u,
                    isLurking: d,
                    isPendingMember: c
                } = (0, O.default)(t), m = (0, L.findReactionIndex)(a.reactions, i) >= 0, {
                    enabled: h,
                    hasTwoButtonEntryPoint: g
                } = (0, T.useBurstReactionsExperiment)(t.guild_id), x = (0, f.useStateFromStores)([E.default], () => E.default.remainingBurstCurrency), {
                    ref: _,
                    width: C
                } = (0, S.default)(), [N, p] = n.useState(10), [M, I] = n.useState(!0);
                return n.useEffect(() => {
                    if (null == C) return;
                    let e = Math.floor((C - 78) / 66);
                    p(e), I(!1)
                }, [C, a.reactions, i]), (0, s.jsxs)("div", {
                    className: r(eM.reactionRow, {
                        [eM.loading]: M
                    }),
                    ref: _,
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
                    }), (0, s.jsx)(L.default, {
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
                        children: [!u && (0, s.jsx)(F.ButtonAddReaction, {
                            type: A.ReactionTypes.NORMAL,
                            message: a,
                            channel: t,
                            useChatFontScaling: !0,
                            className: eM.addReactButton,
                            isForumToolbar: !1
                        }), !u && h && g && (0, s.jsx)(F.ButtonAddReaction, {
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

            function ew(e) {
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
                        children: ep.default.Messages.FORUM_POST_MESSAGE_COUNT_SHORT_PARENTHETICAL.format({
                            count: a
                        })
                    })]
                })
            }

            function eH(e) {
                var t;
                let {
                    channel: a
                } = e, {
                    sortOrder: n
                } = (0, en.useForumChannelStore)(a.parent_id), l = (0, el.useLastActiveTimestamp)(a, n), r = (0, f.useStateFromStores)([W.default], () => W.default.lastMessageId(a.id)), i = null != r ? h.default.extractTimestamp(r) : null, o = null === (t = a.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp, u = null == l ? null : n === m.ThreadSortOrder.CREATION_DATE ? ep.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
                    timestamp: l
                }) : l, c = n === m.ThreadSortOrder.CREATION_DATE && null != o ? ep.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
                    timestamp: (0, et.dateFormat)(d(o), "LLLL")
                }) : null != i ? (0, et.dateFormat)(d(i), "LLLL") : null;
                return null == c || null == u ? null : (0, s.jsx)(x.Tooltip, {
                    text: c,
                    tooltipClassName: eM.timestampTooltip,
                    "aria-label": ep.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP_LABEL,
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
                } = e, r = t.hasFlag(eC.ChannelFlags.PINNED), i = (0, f.useStateFromStores)([z.default], () => null != a && z.default.isBlocked(a.author.id));
                return (0, s.jsxs)("div", {
                    className: eM.header,
                    children: [!l && r && (0, s.jsx)("div", {
                        className: eM.pinIcon,
                        children: (0, s.jsx)(x.Tooltip, {
                            text: ep.default.Messages.PINNED_POST,
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
                    }), (0, s.jsx)(eH, {
                        channel: t
                    }), n && (0, s.jsx)(ee.TextBadge, {
                        className: eM.newBadge,
                        color: g.default.unsafe_rawColors.BRAND_260.css,
                        text: ep.default.Messages.NEW
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
                } = e, o = (0, f.useStateFromStores)([K.default], () => K.default.isFocused()), u = (0, p.isAnimatedImageUrl)(a.src), d = H.GifAutoPlay.useSetting(), {
                    src: c,
                    width: m,
                    height: h,
                    alt: g
                } = a, [_, T] = (0, M.useShouldObscure)({
                    media: a,
                    channel: t
                }), S = (0, M.getObscuredAlt)(T);
                return (0, s.jsx)(x.FocusBlock, {
                    enabled: !0,
                    children: (0, s.jsxs)("div", {
                        className: r(eM.bodyMedia, {
                            [eA.embedFull]: l
                        }),
                        style: {
                            height: i,
                            borderColor: (0, ei.getEmbedColor)(n, _)
                        },
                        onClick: e => e.stopPropagation(),
                        children: [c.startsWith("data:") ? (0, s.jsx)(X.default, {
                            src: c,
                            width: m,
                            height: h,
                            minWidth: 143,
                            minHeight: i,
                            maxHeight: i,
                            alt: null != g && _ ? S : g,
                            imageClassName: r({
                                [eM.obscured]: _
                            })
                        }) : (0, b.renderImageComponent)({
                            src: c,
                            width: m,
                            height: h,
                            minWidth: 143,
                            minHeight: i,
                            maxHeight: i,
                            alt: null != g && _ ? S : g,
                            autoPlay: d,
                            animated: u && !_ && o,
                            imageContainerClassName: r({
                                [eM.obscured]: _
                            })
                        }), _ && (0, s.jsx)(ec.default, {
                            iconClassname: eM.obscuredTag,
                            obscureReason: T
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
                    return _
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

            function _(e) {
                let {
                    channel: t,
                    closePopout: a,
                    setPopoutRef: _
                } = e, T = (0, d.useVisibleForumTags)(t), {
                    tagFilter: S
                } = (0, u.useForumChannelStore)(t.id), C = (0, u.useForumChannelStoreApi)(), N = (0, i.useStateFromStores)([o.default], () => o.default.keyboardModeEnabled), E = n.useCallback(e => {
                    (0, c.trackForumTagFilterClicked)({
                        guildId: t.guild_id,
                        channelId: t.id,
                        tagId: e,
                        filterTagIds: Array.from(S),
                        added: !S.has(e),
                        location: {
                            page: h.AnalyticsPages.GUILD_CHANNEL,
                            section: h.AnalyticsSections.FORUM_CHANNEL_HEADER,
                            object: h.AnalyticsObjects.CHANNEL_TAG
                        }
                    }), C.getState().toggleTagFilter(t.id, e)
                }, [t, S, C]), p = n.useCallback(() => {
                    C.getState().setTagFilter(t.id, new Set), !N && a()
                }, [C, t.id, N, a]), M = (0, l.default)({
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
                    ref: _,
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
                                    children: S.size
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
                                    children: T.map(e => (0, s.jsx)(m.default, {
                                        className: g.tag,
                                        tag: e,
                                        selected: S.has(e.id),
                                        onClick: () => E(e.id)
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
                        onClick: p,
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
                    return _
                },
                GridNavigatorProvider: function() {
                    return T
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
                    _ = n.useCallback((e, t) => {
                        g.current && s(e, t)
                    }, [s]),
                    T = n.useCallback(e => {
                        if (g.current) {
                            var t;
                            null === (t = document.querySelector(e)) || void 0 === t || t.focus()
                        }
                    }, []),
                    S = n.useCallback(e => {
                        u.current = e;
                        let a = (0, i.createSelector)(e, o),
                            s = (0, i.getItemId)(e);
                        _(a, s), (0, l.notifyFocusSubscribers)(t, s, !0)
                    }, [t, _]),
                    [C, N] = n.useState(!1),
                    E = n.useRef(C);
                n.useLayoutEffect(() => {
                    E.current = C
                }, [C]), n.useLayoutEffect(() => {
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
                                null == x(a) && T((0, i.createSelector)(t, "data-grid-id"))
                            }
                        }))
                    }

                    function n() {
                        let e = f.current,
                            t = E.current;
                        if (t || null == e) return
                    }

                    function l() {
                        h.current = !0
                    }
                }, [t, _, T, S, x]);
                let p = n.useCallback(e => {
                        var t, a;
                        if (!g.current) return;
                        let s = u.current,
                            n = f.current;
                        if (null == s) return;
                        let l = (0, i.createSelector)(s, o),
                            h = null == n ? void 0 : n.querySelector(l);
                        if (null == h) return;
                        let _ = parseInt(null !== (t = h.getAttribute("data-grid-section")) && void 0 !== t ? t : ""),
                            T = parseInt(h.getAttribute("aria-rowindex")),
                            C = parseInt(h.getAttribute("aria-colindex"));
                        switch (c.has(e.key) && (e.stopPropagation(), e.preventDefault()), e.key) {
                            case r.Keys.RIGHT: {
                                let e = x(m({
                                    section: _,
                                    row: T,
                                    column: C + 1
                                }));
                                if (null != e) {
                                    let t = e.getAttribute(o);
                                    null != t && S(t)
                                }
                                return
                            }
                            case r.Keys.LEFT: {
                                let e = x(m({
                                    section: _,
                                    row: T,
                                    column: C - 1
                                }));
                                if (null != e) {
                                    let t = e.getAttribute(o);
                                    null != t && S(t)
                                }
                                return
                            }
                            case r.Keys.DOWN: {
                                let e = x(m({
                                    section: _,
                                    row: T + 1,
                                    column: C
                                }));
                                if (null == e && (e = x(m({
                                        section: _ + 1,
                                        row: 0,
                                        column: C
                                    }))), null != e) {
                                    let t = e.getAttribute(o);
                                    null != t && S(t)
                                }
                                return
                            }
                            case r.Keys.UP: {
                                let e;
                                if (0 === T) {
                                    let t = parseInt(h.getAttribute(d));
                                    null == (e = x(m({
                                        section: _ - 1,
                                        row: t,
                                        column: C
                                    }))) && (e = x(m({
                                        section: _ - 1,
                                        row: t - 1,
                                        column: C
                                    })))
                                } else e = x(m({
                                    section: _,
                                    row: T - 1,
                                    column: C
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
                                    let s = (0, i.createSelector)(t, o),
                                        n = x(s),
                                        l = null !== (a = null == n ? void 0 : n.ownerDocument) && void 0 !== a ? a : document,
                                        r = n === l.activeElement;
                                    null != n && r && (e.preventDefault(), e.stopPropagation(), null == n || n.click())
                                }
                            }
                        }
                    }, [x, S]),
                    M = n.useCallback(e => {
                        let a = null != e ? (0, i.createListItemId)(t, e) : null;
                        u.current = a
                    }, [t]);
                return n.useMemo(() => ({
                    id: t,
                    containerProps: {
                        onKeyDown: p,
                        ref: f
                    },
                    setFocus: M
                }), [t, p, M])
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

            function _(e) {
                let {
                    id: t,
                    section: a,
                    row: s,
                    column: r,
                    boundaries: c
                } = e, [m, h] = n.useState(0 === s && 0 === r ? 0 : -1), f = n.useContext(g), {
                    id: x,
                    setFocus: _
                } = f, T = n.useCallback(() => _(t), [t, _]);
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
                    onFocus: T
                }
            }

            function T(e) {
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
                _ = a("592407"),
                T = a("305961"),
                S = a("181114"),
                C = a("191814"),
                N = a("109264"),
                E = a("945330"),
                p = a("68238"),
                M = a("758710"),
                A = a("58608"),
                I = a("701909"),
                v = a("753582"),
                j = a("49111"),
                R = a("782340"),
                O = a("528639"),
                F = a("112545"),
                b = a("600310"),
                L = a("129185"),
                y = a("338283");

            function P(e) {
                let {
                    handleHide: t
                } = e;
                return (0, s.jsx)(d.Clickable, {
                    onClick: t,
                    className: O.closeButton,
                    "aria-label": R.default.Messages.DISMISS,
                    children: (0, s.jsx)(E.default, {
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
                    }), (0, s.jsx)(C.default, {
                        size: 10
                    }), (0, s.jsx)(A.default, {
                        className: O.video,
                        src: n,
                        autoPlay: !0,
                        loop: !0,
                        muted: !0
                    }), (0, s.jsx)(C.default, {
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
                } = e, N = (0, c.default)(), E = (0, u.isThemeDark)(N), A = (0, o.useStateFromStores)([T.default], () => T.default.getGuild(l.guild_id)), U = (0, o.useStateFromStores)([m.default], () => m.default.useReducedMotion), k = (0, o.useStateFromStores)([h.default], () => h.default.hasHidden(l.id)), w = (0, x.useSubscriptionListingsForChannel)({
                    guildId: l.guild_id,
                    channelId: l.id
                }), {
                    transitions: H,
                    setVisible: B
                } = (0, v.useShowAnimation)(U), G = n.useCallback(() => {
                    B(!1), f.default.hideAdminOnboarding(l.id, !0)
                }, [l, B]);
                n.useEffect(() => {
                    let e = (0, g.isOnboardingDismissed)(l.id);
                    !e && B(!k)
                }, [l, B, k]);
                let V = n.useMemo(() => [R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_FAN_ART_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_DESK_SETUP_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PETS_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HOUSEPLANTS_TAG], []),
                    W = n.useMemo(() => [R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_BEHIND_THE_SCENES_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_EXCLUSIVE_ART_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_PRERELEASES_TAG, R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_TUTORIALS_TAG], []),
                    z = () => {
                        _.default.open(l.guild_id, j.GuildSettingsSections.ROLE_SUBSCRIPTIONS)
                    },
                    K = null !== (t = null == A ? void 0 : A.hasFeature(j.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) && void 0 !== t && t,
                    Y = K ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_HAS_TIERS_CTA : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_NO_TIERS_CTA,
                    X = null !== (a = (null == A ? void 0 : A.hasFeature(j.GuildFeatures.CREATOR_MONETIZABLE)) || (null == A ? void 0 : A.hasFeature(j.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))) && void 0 !== a && a,
                    q = X ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_TITLE : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_TITLE,
                    Z = X ? R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_MONETIZING_SUBTITLE : R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_ABOUT_NON_MONETIZING_SUBTITLE;
                return (0, s.jsx)(s.Fragment, {
                    children: H((e, t) => t ? (0, s.jsxs)(i.animated.div, {
                        style: e,
                        className: O.container,
                        children: [(0, s.jsxs)("div", {
                            className: r(O.wrapper, O.headerRow),
                            children: [(0, s.jsxs)(d.Text, {
                                variant: "text-xs/normal",
                                className: O.visibilityInfo,
                                children: [(0, s.jsx)(p.default, {
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
                                className: r(O.contentRow, X && O.contentRowOne),
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
                                        children: q
                                    }), (0, s.jsx)(C.default, {
                                        size: 8
                                    }), (0, s.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: Z
                                    }), (0, s.jsx)(C.default, {
                                        size: 16
                                    }), (0, s.jsxs)(d.Clickable, {
                                        onClick: () => open(I.default.getCreatorSupportArticleURL(j.HelpdeskArticles.MEDIA_CHANNEL)),
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
                                    }), (0, s.jsx)(C.default, {
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
                            }), X && (0, s.jsxs)("div", {
                                className: r(O.contentRow, O.contentRowTwo),
                                children: [(0, s.jsx)("div", {
                                    className: r(O.contentMediaContainer),
                                    children: (0, s.jsxs)("div", {
                                        className: O.contentImageContainer,
                                        children: [(0, s.jsx)("img", {
                                            src: E ? L : y,
                                            alt: "",
                                            className: r(O.previewEmbedImage, O.secondaryImage)
                                        }), (0, s.jsx)("img", {
                                            src: E ? F : b,
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
                                    }), (0, s.jsx)(C.default, {
                                        size: 10
                                    }), (0, s.jsx)(d.Heading, {
                                        variant: "heading-lg/semibold",
                                        color: "header-primary",
                                        children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_TITLE
                                    }), (0, s.jsx)(C.default, {
                                        size: 8
                                    }), (0, s.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: R.default.Messages.MEDIA_POST_ADMIN_EDUCATION_SHARE_SUBTITLE
                                    }), (0, s.jsx)(C.default, {
                                        size: 16
                                    }), (0, s.jsx)("div", {
                                        className: O.mediaChannelTagsContainer,
                                        children: W.map(e => (0, s.jsx)(d.Text, {
                                            variant: "text-sm/medium",
                                            color: "text-normal",
                                            className: O.mediaChannelTag,
                                            children: e
                                        }, e))
                                    }), (0, s.jsx)(C.default, {
                                        size: 16
                                    }), 0 === w.length && (0, s.jsx)(S.default, {
                                        size: d.Button.Sizes.MEDIUM,
                                        pauseAnimation: U,
                                        onClick: z,
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
                    return b
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
                _ = a("855455"),
                T = a("476765"),
                S = a("857171"),
                C = a("832132"),
                N = a("808404"),
                E = a("987772"),
                p = a("228220"),
                M = a("58608"),
                A = a("412861"),
                I = a("489898"),
                v = a("782340"),
                j = a("73386");
            let R = [{
                    name: "Media Post Thumbnail",
                    extensions: ["jpg", "jpeg", "png", "gif", "webp"]
                }],
                O = (0, T.uid)();

            function F(e) {
                let {
                    mediaAttachments: t,
                    containerWidth: a,
                    containerHeight: n
                } = e, l = (0, _.useImageContainerStyles)({
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
            let b = e => {
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
                }), _ = (0, u.default)([m.default], () => m.default.keyboardModeEnabled), T = (0, I.default)(l, null === (t = i.textValue) || void 0 === t ? void 0 : t.trim()), M = n.useMemo(() => T.find(e => e.isThumbnail), [T]), b = null != T && T.length > 0, L = n.useMemo(() => {
                    let e = (null == T ? void 0 : T.length) > 1 ? 1.15 : 1;
                    return {
                        width: 153 * e,
                        height: 86 * e
                    }
                }, [T]), y = n.useCallback(e => {
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
                }, D = (0, s.jsx)(S.default, {
                    color: d.ButtonColors.CUSTOM,
                    className: r(j.uploadFileInputContainer),
                    innerClassName: j.uploadThumbnailContainer,
                    onChange: y,
                    multiple: !1,
                    "aria-hidden": !0,
                    filters: R,
                    "aria-describedby": O,
                    "aria-label": b ? v.default.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL : v.default.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL,
                    children: b ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(F, {
                            mediaAttachments: T,
                            containerWidth: L.width,
                            containerHeight: L.height
                        }), (0, s.jsxs)("div", {
                            className: r(j.changeThumbnailLabelContainer, {
                                [j.changeThumbnailLabelOverflow]: (null == T ? void 0 : T.length) > 2
                            }),
                            children: [(0, s.jsx)(d.Text, {
                                variant: "text-xs/medium",
                                color: "header-secondary",
                                children: v.default.Messages.MEDIA_CHANNEL_CHANGE_THUMBNAIL_LABEL
                            }), null == M && (0, s.jsx)(C.default, {
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
                            children: v.default.Messages.MEDIA_CHANNEL_UPLOAD_THUMBNAIL_LABEL
                        })]
                    })
                });
                return (0, s.jsx)("div", {
                    className: j.thumbnailContainer,
                    style: L,
                    children: null != M ? (0, s.jsx)(g.default, {
                        actions: (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(f.default, {
                                className: j.action,
                                tooltip: v.default.Messages.ATTACHMENT_UTILITIES_MODIFY,
                                onClick: P,
                                children: (0, s.jsx)(E.default, {})
                            }), (0, s.jsx)(f.default, {
                                className: j.action,
                                tooltip: v.default.Messages.ATTACHMENT_UTILITIES_REMOVE,
                                onClick: () => c.default.remove(l.id, M.id, h.ChatInputTypes.CREATE_FORUM_POST.drafts.type),
                                dangerous: !0,
                                children: (0, s.jsx)(p.default, {})
                            })]
                        }),
                        draftType: h.ChatInputTypes.CREATE_FORUM_POST.drafts.type,
                        id: M.id,
                        channelId: l.id,
                        handleEditModal: P,
                        keyboardModeEnabled: _,
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
        }
    }
]);