            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return es
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("917351"),
                o = n.n(r),
                u = n("817736"),
                d = n("90915"),
                c = n("974667"),
                f = n("118810"),
                h = n("446674"),
                C = n("233736"),
                p = n("862337"),
                m = n("77078"),
                E = n("406189"),
                g = n("302437"),
                I = n("812204"),
                S = n("685665"),
                _ = n("191145"),
                N = n("15131"),
                T = n("480376"),
                A = n("205550"),
                L = n("267567"),
                v = n("393027"),
                x = n("162805"),
                R = n("26989"),
                M = n("305961"),
                O = n("677099"),
                y = n("697218"),
                D = n("773336"),
                b = n("439932"),
                j = n("674644"),
                G = n("533669"),
                U = n("270382"),
                P = n("777778"),
                w = n("648647"),
                F = n("982360"),
                B = n("628570"),
                V = n("822485"),
                H = n("798573"),
                k = n("795853"),
                Y = n("357762"),
                K = n("504957"),
                W = n("199218"),
                Z = n("624531"),
                z = n("785343"),
                X = n("22567"),
                Q = n("49111"),
                q = n("782340"),
                J = n("5457");
            let $ = 56,
                ee = (0, D.isWindows)() ? 4 : (0, D.isMac)() ? 0 : 12,
                et = $ - 16,
                en = ee + 10;
            class el {
                setGuildsTree(e) {
                    this.guildsTree = e
                }
                constructor(e, t, n) {
                    this.guildsTree = e, this.setScrolling = t, this.onScroll = n, this.scrollerRef = a.createRef(), this.guildDiscoveryRef = a.createRef(), this.nodeRefs = {}, this.timeout = new p.Timeout, this.isScrolling = !1, this.scrollToGuild = (e, t) => {
                        let n = this.scrollerRef.current;
                        if (null == n) return;
                        if (null == e && window.location.pathname.startsWith(Q.Routes.GUILD_DISCOVERY) || e === Q.ViewHistoryKeys.SERVER_DISCOVERY_BADGE || e === Q.ViewHistoryKeys.E3_SERVER_DISCOVERY_BADGE) {
                            let e = (0, u.findDOMNode)(this.guildDiscoveryRef.current);
                            (0, f.isElement)(e, HTMLElement) ? n.scrollIntoViewNode({
                                node: e,
                                animate: t,
                                padding: 8
                            }): n.scrollTo({
                                to: 0,
                                animate: t
                            });
                            return
                        }
                        if (null == e) {
                            n.scrollTo({
                                to: 0,
                                animate: t
                            });
                            return
                        }
                        let l = this.nodeRefs[e];
                        for (; null == l;) {
                            let t = this.guildsTree.getNode(e);
                            if ((null == t ? void 0 : t.parentId) == null) break;
                            l = this.nodeRefs[t.parentId]
                        }
                        null != l && (0, f.isElement)(l) ? n.scrollIntoViewNode({
                            node: l,
                            animate: t,
                            padding: 8
                        }) : n.scrollTo({
                            to: 0,
                            animate: t
                        })
                    }, this.handleJumpToGuild = e => {
                        this.scrollToGuild(e, !0)
                    }, this.scrollTo = e => {
                        var t;
                        null === (t = this.scrollerRef.current) || void 0 === t || t.scrollTo(e)
                    }, this.isItemVisible = (e, t, n) => {
                        let l = this.scrollerRef.current;
                        if (null == l) return !1;
                        let a = n.findIndex(t => "string" == typeof t || null == t ? t === e : t.includes(e));
                        if (a < 0) return !1;
                        let s = $ * a + en;
                        !t && (s += et);
                        let i = l.getScrollerState();
                        return !t && !!(s >= i.scrollTop) || !!t && !!(s + $ <= i.scrollTop + i.offsetHeight) || !1
                    }, this.handleScroll = () => {
                        !this.isScrolling && this.setScrolling(!0), this.timeout.start(200, () => this.setScrolling(!1)), this._handleScroll()
                    }, this._handleScroll = o.debounce(() => {
                        let e = this.scrollerRef.current;
                        if (null == e) return;
                        let {
                            scrollTop: t
                        } = e.getScrollerState();
                        E.default.updateGuildListScrollTo(t), this.onScroll()
                    }, 200), this.setNodeRef = (e, t) => {
                        this.nodeRefs[e] = t
                    }
                }
            }

            function ea(e) {
                let {
                    disableAppDownload: t = D.isPlatformEmbedded,
                    isOverlay: n = !1,
                    className: s,
                    themeOverride: r
                } = e, [o] = (0, h.useStateFromStoresArray)([O.default], () => {
                    let e = O.default.getGuildsTree();
                    return [e, e.version]
                }), u = (0, h.useStateFromStores)([L.default], () => L.default.lurkingGuildIds()), f = a.useMemo(() => n ? [] : u, [u, n]), C = (0, h.useStateFromStoresArray)([M.default, R.default], () => Object.keys(M.default.getGuilds()).filter(e => R.default.isCurrentUserGuest(e))), E = f.concat(C), g = (0, h.useStateFromStores)([y.default], () => {
                    var e;
                    return null === (e = y.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()
                }), $ = (0, h.useStateFromStores)([_.default], () => _.default.isFullscreenInContext()), [ee, et] = a.useState(!1), en = a.useCallback(() => et(!0), []), ea = a.useCallback(() => et(!1), []), es = a.useRef(!1), [ei] = a.useState(() => new p.Timeout), er = a.useRef(null), eo = a.useRef(null), {
                    ref: eu,
                    ...ed
                } = (0, c.useListContainerProps)(), ec = (0, m.useFocusJumpSection)(), [ef, eh] = a.useState(!1), [eC] = a.useState(() => new el(o, eh, () => {
                    var e, t;
                    null === (e = er.current) || void 0 === e || e.calculateState(), null === (t = eo.current) || void 0 === t || t.calculateState()
                })), {
                    AnalyticsLocationProvider: ep
                } = (0, S.default)(I.default.GUILDS_LIST), {
                    pathname: em
                } = (0, d.useLocation)(), eE = em.startsWith(Q.Routes.GUILD_DISCOVERY), eg = em.startsWith(Q.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
                a.useLayoutEffect(() => {
                    if (!es.current) {
                        if (0 !== o.size) {
                            if (eE) eC.scrollToGuild(null, !1);
                            else {
                                let {
                                    scrollTop: e
                                } = x.default.getGuildListDimensions();
                                eC.scrollTo({
                                    to: e,
                                    animate: !1
                                })
                            }
                            return es.current = !0, () => ei.stop()
                        }
                    }
                }, []), a.useEffect(() => {
                    if (eC.setGuildsTree(o), es.current || 0 === o.size) return;
                    let e = v.default.getState().guildId;
                    eC.scrollToGuild(e, !1);
                    let t = null,
                        n = v.default.subscribe(e => {
                            let {
                                guildId: n
                            } = e;
                            n !== t && (t = n, eC.scrollToGuild(t, !1))
                        });
                    return n
                }, [o, eC]), (0, G.default)(eC.scrollToGuild);
                let eI = (0, A.useEligibleForGameRecommendations)(),
                    eS = o.getRoots(),
                    e_ = (0, N.default)();
                return (0, l.jsx)(ep, {
                    children: (0, l.jsx)("nav", {
                        className: i(J.wrapper, s, (0, b.getThemeClass)(r), {
                            [J.hidden]: $
                        }),
                        "aria-label": q.default.Messages.GUILDS_BAR_A11Y_LABEL,
                        children: (0, l.jsxs)("ul", {
                            ref: eu,
                            ...ed,
                            ...ec,
                            role: "tree",
                            className: J.tree,
                            children: [(0, l.jsx)(U.default, {
                                ref: er,
                                isVisible: eC.isItemVisible,
                                onJumpTo: eC.handleJumpToGuild,
                                className: J.unreadMentionsIndicatorTop,
                                barClassName: J.unreadMentionsBar
                            }), (0, l.jsxs)(m.AdvancedScrollerNone, {
                                className: i({
                                    [J.scroller]: !0,
                                    [J.scrolling]: ef
                                }),
                                ref: eC.scrollerRef,
                                onScroll: eC.handleScroll,
                                children: [(0, l.jsx)(H.HomeButton, {}), e_ ? (0, l.jsx)(T.default, {}) : null, (0, l.jsx)(F.default, {}), (0, l.jsx)(k.default, {
                                    isOnHubVerificationRoute: eg
                                }), (0, l.jsx)(P.default, {}), E.map(e => (0, l.jsx)(X.default, {
                                    guildId: e
                                }, e)), g ? (0, l.jsx)(z.default, {}) : null, !n && eI ? (0, l.jsx)(V.default, {
                                    ref: eC.guildDiscoveryRef,
                                    selected: eE,
                                    tooltip: q.default.Messages.GUILD_DISCOVERY_TOOLTIP
                                }) : null, (0, l.jsx)(Y.default, {}), (0, l.jsx)("div", {
                                    "aria-label": q.default.Messages.SERVERS,
                                    children: eS.map(function e(t) {
                                        switch (t.type) {
                                            case j.GuildsNodeType.FOLDER:
                                                return (0, l.jsx)(W.default, {
                                                    folderNode: t,
                                                    setNodeRef: eC.setNodeRef,
                                                    draggable: !0,
                                                    sorting: ee,
                                                    onDragStart: en,
                                                    onDragEnd: ea,
                                                    renderChildNode: e
                                                }, t.id);
                                            case j.GuildsNodeType.GUILD:
                                                return (0, l.jsx)(Z.default, {
                                                    guildNode: t,
                                                    setRef: eC.setNodeRef,
                                                    draggable: !0,
                                                    sorting: ee,
                                                    onDragStart: en,
                                                    onDragEnd: ea
                                                }, t.id);
                                            default:
                                                return null
                                        }
                                    })
                                }), n ? null : (0, l.jsx)(B.default, {
                                    disableTooltip: f.length > 0,
                                    lastTargetNode: eS[eS.length - 1]
                                }), n || eI ? null : (0, l.jsx)(V.default, {
                                    ref: eC.guildDiscoveryRef,
                                    selected: eE
                                }), (0, l.jsx)(K.default, {}), t ? null : (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)(Y.default, {}), (0, l.jsx)(w.default, {})]
                                })]
                            }), (0, l.jsx)(U.default, {
                                reverse: !0,
                                ref: eo,
                                isVisible: eC.isItemVisible,
                                onJumpTo: eC.handleJumpToGuild,
                                className: J.unreadMentionsIndicatorBottom,
                                barClassName: J.unreadMentionsBar
                            })]
                        })
                    })
                })
            }
            var es = a.memo(function(e) {
                let t = (0, g.default)("guildsnav");
                return (0, l.jsx)(c.ListNavigatorProvider, {
                    navigator: t,
                    children: (0, l.jsx)(ea, {
                        ...e
                    })
                })
            }, (e, t) => !1 === t.isVisible || (0, C.default)(e, t))