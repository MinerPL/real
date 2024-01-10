            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return H
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("974667"),
                o = n("446674"),
                u = n("77078"),
                d = n("819689"),
                c = n("734575"),
                f = n("206230"),
                h = n("890503"),
                C = n("336696"),
                p = n("38654"),
                m = n("347738"),
                E = n("845579"),
                g = n("271938"),
                S = n("836417"),
                _ = n("88093"),
                A = n("377253"),
                T = n("957255"),
                M = n("660478"),
                N = n("462495"),
                I = n("697218"),
                v = n("505684"),
                L = n("378765"),
                R = n("70845"),
                x = n("51714"),
                y = n("88243"),
                O = n("31511"),
                D = n("120379"),
                j = n("221068"),
                b = n("49111"),
                P = n("782340"),
                F = n("278224");
            let U = s.memo(function(e) {
                var t, n;
                let {
                    className: l,
                    messageGroupSpacing: c,
                    scrollerClassName: h,
                    channel: C,
                    messages: m,
                    unreadCount: E,
                    showNewMessagesBar: g,
                    messageDisplayCompact: S,
                    channelStream: _,
                    uploads: A,
                    hasUnreads: M,
                    editingMessageId: N,
                    fontSize: I,
                    keyboardModeEnabled: v,
                    filterAfterTimestamp: R,
                    showingQuarantineBanner: x
                } = e, [U, H] = s.useState(!1), k = s.useMemo(() => S ? (0, y.generateMessageSpecs)({
                    compact: !0,
                    messageGroups: 30,
                    groupRange: 4,
                    attachments: 8,
                    fontSize: I,
                    groupSpacing: c
                }) : (0, y.generateMessageSpecs)({
                    compact: !1,
                    messageGroups: 26,
                    groupRange: 4,
                    attachments: 8,
                    fontSize: I,
                    groupSpacing: c
                }), [S, I, c]), G = (0, D.default)({
                    messages: m,
                    channel: C,
                    compact: S,
                    hasUnreads: M,
                    focusId: N,
                    placeholderHeight: k.totalHeight,
                    canLoadMore: null == R,
                    handleScrollToBottom: s.useCallback(() => H(!0), [H]),
                    handleScrollFromBottom: s.useCallback(() => H(!1), [H])
                }), w = (0, O.default)({
                    scrollerRef: G.ref,
                    isEditing: null != N,
                    keyboardModeEnabled: v,
                    hasMoreAfter: m.hasMoreAfter
                });
                let B = (n = C, (0, o.useStateFromStores)([p.default], () => {
                        let e = T.default.can(b.Permissions.READ_MESSAGE_HISTORY, n);
                        return e ? null : p.default.getViewingRolesTimestamp(n.getGuildId())
                    })),
                    {
                        channelStreamMarkup: V,
                        newMessagesBar: W,
                        jumpToPresentBar: z,
                        forumPostActionBar: Z,
                        strangerDangerWarningBanner: K
                    } = (0, j.default)({
                        channel: C,
                        messages: m,
                        unreadCount: E,
                        showNewMessagesBar: g,
                        messageDisplayCompact: S,
                        channelStream: _,
                        uploads: A,
                        loadMore: G.loadMore,
                        scrollManager: G,
                        specs: k,
                        filterAfterTimestamp: null != R ? R : B,
                        showingQuarantineBanner: x,
                        isAtBottom: U,
                        jumpToPresent: () => {
                            if (m.hasPresent()) {
                                var e;
                                null === (e = G.ref.current) || void 0 === e || e.scrollToBottom({
                                    animate: !f.default.useReducedMotion
                                })
                            } else d.default.jumpToPresent(C.id, b.MAX_MESSAGES_PER_CHANNEL)
                        }
                    });
                ! function(e) {
                    let t = s.useCallback(() => {
                            var t;
                            return null === (t = e.current) || void 0 === t ? void 0 : t.scrollToBottom()
                        }, [e]),
                        n = s.useCallback(() => {
                            var t;
                            return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageUp({
                                animate: !f.default.useReducedMotion
                            })
                        }, [e]),
                        a = s.useCallback(() => {
                            var t;
                            return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageDown({
                                animate: !f.default.useReducedMotion
                            })
                        }, [e]);
                    (0, L.useComponentAction)({
                        event: b.ComponentActions.SCROLLTO_PRESENT,
                        handler: t
                    }), (0, L.useComponentAction)({
                        event: b.ComponentActions.SCROLL_PAGE_UP,
                        handler: n
                    }), (0, L.useComponentAction)({
                        event: b.ComponentActions.SCROLL_PAGE_DOWN,
                        handler: a
                    })
                }(G.ref);
                let Y = (0, u.useFocusJumpSection)(),
                    {
                        ref: q,
                        ...X
                    } = (0, r.getContainerPropsFromNavigator)(w),
                    Q = s.useCallback(e => {
                        var t;
                        G.ref.current = e, q.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
                    }, []);
                return (0, a.jsx)(r.ListNavigatorProvider, {
                    navigator: w,
                    children: (0, a.jsxs)("div", {
                        className: i(F.messagesWrapper, l, "group-spacing-".concat(c)),
                        children: [null != K ? K : W, (0, a.jsxs)(u.PinToBottomScrollerAuto, {
                            ref: Q,
                            customTheme: !0,
                            className: i(h, F.scroller),
                            contentClassName: F.scrollerContent,
                            onResize: G.handleResize,
                            onScroll: G.handleScroll,
                            onMouseDown: G.handleMouseDown,
                            onMouseUp: G.handleMouseUp,
                            ...Y,
                            tabIndex: -1,
                            role: "group",
                            children: [Z, (0, a.jsxs)("ol", {
                                className: F.scrollerInner,
                                "aria-label": P.default.Messages.CHANNEL_MESSAGES_A11Y_LABEL.format({
                                    channelName: C.name
                                }),
                                ...X,
                                children: [(0, a.jsx)("span", {
                                    className: F.navigationDescription,
                                    id: "messagesNavigationDescription",
                                    "aria-hidden": !0,
                                    children: P.default.Messages.CHANNEL_MESSAGES_A11Y_DESCRIPTION
                                }), V, (0, a.jsx)("div", {
                                    className: i({
                                        [F.scrollerSpacer]: !x,
                                        [F.empty]: 0 === m.length && !m.loadingMore,
                                        [F.emptyForum]: 1 === m.length && !m.loadingMore && C.isForumPost() && (null === (t = m.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(C))
                                    })
                                })]
                            })]
                        }), z]
                    })
                })
            }, (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden);
            var H = s.memo(function(e) {
                let {
                    channel: t,
                    showingQuarantineBanner: n,
                    forceCompact: l = !1,
                    forceCozy: i = !1,
                    ...r
                } = e, {
                    canManageMessages: u,
                    permissionVersion: d,
                    canChat: p
                } = function(e) {
                    let t = e.getGuildId(),
                        n = (0, o.useStateFromStores)([_.default], () => null == t || _.default.canChatInGuild(t), [t]),
                        {
                            canManageMessages: a,
                            permissionVersion: s
                        } = (0, o.useStateFromStoresObject)([T.default], () => ({
                            canManageMessages: T.default.can(b.Permissions.MANAGE_MESSAGES, e),
                            permissionVersion: null != t ? T.default.getGuildVersion(t) : null
                        }), [e, t]);
                    return {
                        canChat: n,
                        permissionVersion: s,
                        canManageMessages: a
                    }
                }(t), {
                    messageGroupSpacing: L,
                    fontSize: y,
                    messageDisplayCompact: O,
                    renderSpoilers: D,
                    keyboardModeEnabled: j
                } = function() {
                    let e = E.MessageDisplayCompact.useSetting(),
                        t = E.RenderSpoilers.useSetting(),
                        {
                            messageGroupSpacing: n,
                            fontSize: a,
                            keyboardModeEnabled: s
                        } = (0, o.useStateFromStoresObject)([f.default], () => {
                            let {
                                messageGroupSpacing: e,
                                fontSize: t,
                                keyboardModeEnabled: n
                            } = f.default;
                            return {
                                messageGroupSpacing: e,
                                fontSize: t,
                                keyboardModeEnabled: n
                            }
                        });
                    return {
                        messageGroupSpacing: n,
                        messageDisplayCompact: e,
                        renderSpoilers: t,
                        fontSize: a,
                        keyboardModeEnabled: s
                    }
                }(), {
                    messages: P,
                    channelStream: F,
                    oldestUnreadMessageId: H,
                    editingMessageId: k
                } = function(e) {
                    var t, n;
                    let a = (0, o.useStateFromStores)([A.default], () => A.default.getMessages(e.id), [e.id]),
                        l = (0, o.useStateFromStores)([M.default], () => {
                            var t;
                            return null !== (t = M.default.getOldestUnreadMessageId(e.id)) && void 0 !== t ? t : null
                        }, [e.id]),
                        {
                            enabled: i
                        } = C.default.useExperiment({
                            location: "41de6d_1"
                        }, {
                            autoTrackExposure: !1
                        }),
                        r = null !== (n = null === (t = I.default.getUser(g.default.getId())) || void 0 === t ? void 0 : t.hasFlag(b.UserFlags.SPAMMER)) && void 0 !== n && n,
                        u = (0, c.useChannelSummariesExperiment)(e),
                        d = (0, h.default)("use_topic_dividers_in_chat"),
                        f = (0, o.useStateFromStoresArray)([m.default], () => {
                            var t;
                            return u && d && null !== (t = m.default.summaries(e.id)) && void 0 !== t ? t : []
                        }, [u, e.id, d]),
                        p = (0, o.useStateFromStores)([m.default], () => u ? m.default.selectedSummary(e.id) : null, [u, e.id]),
                        E = s.useMemo(() => (0, x.default)({
                            channel: e,
                            messages: a,
                            oldestUnreadMessageId: l,
                            treatSpam: i && !r,
                            summaries: f,
                            selectedSummary: p
                        }), [a, e, l, i, f, p]),
                        _ = (0, o.useStateFromStores)([S.default], () => {
                            var t;
                            return null === (t = S.default.getEditingMessage(e.id)) || void 0 === t ? void 0 : t.id
                        });
                    return {
                        messages: a,
                        channelStream: E,
                        oldestUnreadMessageId: l,
                        editingMessageId: _
                    }
                }(t);
                return (0, a.jsx)(v.ObscuredDisplayContext.Provider, {
                    value: (0, R.default)(D, u),
                    children: (0, a.jsx)(U, {
                        ...r,
                        messageGroupSpacing: L,
                        showNewMessagesBar: !0,
                        channel: t,
                        messageDisplayCompact: !i && (l || O),
                        messages: P,
                        channelStream: F,
                        permissionVersion: d,
                        uploads: (0, o.useStateFromStores)([N.default], () => N.default.getFiles(t.id), [t]),
                        unreadCount: (0, o.useStateFromStores)([M.default], () => M.default.getUnreadCount(t.id), [t]),
                        hasUnreads: null != H,
                        canChat: p,
                        editingMessageId: k,
                        fontSize: y,
                        keyboardModeEnabled: j,
                        showingQuarantineBanner: n
                    })
                })
            })