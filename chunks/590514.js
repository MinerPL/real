            "use strict";
            n.r(t), n.d(t, {
                Header: function() {
                    return y
                },
                EmptyStateCenter: function() {
                    return x
                },
                ItemsPopout: function() {
                    return b
                },
                default: function() {
                    return F
                }
            }), n("222007"), n("424973");
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
                _ = n("510889"),
                h = n("699473"),
                S = n("393414"),
                T = n("161778"),
                p = n("42203"),
                N = n("377253"),
                I = n("957255"),
                m = n("600133"),
                A = n("471671"),
                g = n("822332"),
                C = n("945330"),
                R = n("599110"),
                M = n("659500"),
                O = n("49111"),
                L = n("782340"),
                v = n("466908");

            function D(e) {
                e.stopPropagation()
            }
            let y = e => {
                    let {
                        title: t,
                        children: n,
                        className: a
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: i(a, v.header),
                        children: [null == t ? null : (0, l.jsx)(c.Heading, {
                            variant: "heading-md/medium",
                            children: t
                        }), n]
                    })
                },
                x = e => {
                    let {
                        msg: t,
                        image: n
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: v.emptyPlaceholder,
                        children: [(0, l.jsx)("div", {
                            className: v.image,
                            style: {
                                backgroundImage: "url(".concat(n, ")")
                            }
                        }), (0, l.jsx)("div", {
                            className: v.body,
                            children: t
                        })]
                    })
                };
            class P extends a.PureComponent {
                renderJumpButton() {
                    let {
                        jumping: e
                    } = this.props;
                    return (0, l.jsxs)(c.Clickable, {
                        className: v.jumpButton,
                        onClick: this.handleClickJump,
                        children: [(0, l.jsx)("div", {
                            className: i(v.text, {
                                hidden: e
                            }),
                            children: L.default.Messages.JUMP
                        }), (0, l.jsx)(c.Spinner, {
                            type: c.Spinner.Type.PULSING_ELLIPSIS,
                            className: i(v.loading, {
                                [v.visible]: e
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
                        children: (0, l.jsx)(C.default, {
                            className: v.closeIcon
                        })
                    }) : null
                }
                render() {
                    return (0, l.jsxs)("div", {
                        className: v.actionButtons,
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
            let U = d.default.connectStores([I.default], e => {
                let {
                    channel: t
                } = e;
                return {
                    canManageMessages: null != t && I.default.can(O.Permissions.MANAGE_MESSAGES, t)
                }
            })(P);

            function b(e) {
                let {
                    analyticsName: t,
                    items: n,
                    hasMore: s,
                    loading: r,
                    loadMore: f,
                    renderHeader: E,
                    renderEmptyState: h,
                    renderItem: S,
                    getProTip: p,
                    scrollerClassName: N,
                    className: I,
                    listName: C
                } = e, y = a.useRef(null), x = (0, _.default)(C, y), P = (0, d.useStateFromStores)([m.default], () => m.default.hasNotice()), U = (0, d.useStateFromStores)([A.default], () => A.default.windowSize());
                a.useEffect(() => {
                    R.default.track(O.AnalyticEvents.OPEN_POPOUT, {
                        type: t
                    })
                }, [t]), a.useEffect(() => {
                    function e() {
                        var e;
                        null === (e = y.current) || void 0 === e || e.scrollPageUp({
                            animate: !0
                        })
                    }

                    function t() {
                        var e;
                        null === (e = y.current) || void 0 === e || e.scrollPageDown({
                            animate: !0
                        })
                    }
                    return M.ComponentDispatch.subscribe(O.ComponentActions.SCROLL_PAGE_DOWN, t), M.ComponentDispatch.subscribe(O.ComponentActions.SCROLL_PAGE_UP, e), () => {
                        M.ComponentDispatch.unsubscribe(O.ComponentActions.SCROLL_PAGE_DOWN, t), M.ComponentDispatch.unsubscribe(O.ComponentActions.SCROLL_PAGE_UP, e)
                    }
                }, []);
                let b = a.useCallback(() => {
                        var e;
                        let t = null === (e = y.current) || void 0 === e ? void 0 : e.getScrollerState();
                        null != t && t.scrollHeight === t.scrollTop + t.offsetHeight && s && !r && (null == f || f())
                    }, [s, f, r]),
                    F = [],
                    j = !0;
                null == n ? F = [(0, l.jsx)("div", {
                    className: i(v.emptyPlaceholder, v.loadingPlaceholder),
                    children: (0, l.jsx)(c.Spinner, {})
                }, "spinner")] : 0 === n.length ? F.push((0, l.jsx)(a.Fragment, {
                    children: h(T.default.theme)
                }, "empty-state")) : (j = !1, F = [], o.each(n, e => {
                    F.push(...S(e))
                }));
                let G = null;
                null != n && n.length > 0 && null != f && (G = r ? (0, l.jsx)("div", {
                    className: v.loadingMore,
                    children: (0, l.jsx)(c.Spinner, {})
                }, "loading-more-after") : s ? (0, l.jsx)("div", {
                    className: v.hasMore,
                    children: (0, l.jsx)(c.Button, {
                        look: c.Button.Looks.FILLED,
                        color: c.Button.Colors.PRIMARY,
                        size: c.Button.Sizes.MAX,
                        onClick: f,
                        children: L.default.Messages.LOAD_MORE_MESSAGES
                    })
                }) : (0, l.jsx)("div", {
                    className: v.scrollingFooterWrap,
                    children: h(T.default.theme)
                }));
                let k = null == p ? void 0 : p(),
                    w = j && null != k ? (0, l.jsx)("div", {
                        className: v.footer,
                        children: (0, l.jsx)(g.default, {
                            style: {
                                width: "100%",
                                paddingTop: 10
                            },
                            children: k
                        })
                    }) : null,
                    B = {
                        maxHeight: U.height - 43 - 25
                    };
                P && (B.maxHeight -= 40);
                let H = null != f && s;
                return (0, l.jsx)("div", {
                    className: i(I, v.messagesPopoutWrap),
                    style: B,
                    onClick: D,
                    onDoubleClick: D,
                    "aria-label": e["aria-label"],
                    children: (0, l.jsxs)(c.HeadingLevel, {
                        component: E(),
                        children: [(0, l.jsxs)(c.AdvancedScroller, {
                            className: i(v.messagesPopout, N),
                            onScroll: H ? b : void 0,
                            ref: y,
                            children: [(0, l.jsx)(u.ListNavigatorProvider, {
                                navigator: x,
                                children: (0, l.jsx)(u.ListNavigatorContainer, {
                                    children: e => {
                                        let {
                                            ref: t,
                                            ...n
                                        } = e;
                                        return (0, l.jsx)("div", {
                                            ref: t,
                                            ...n,
                                            children: F
                                        })
                                    }
                                })
                            }), G]
                        }), w]
                    })
                })
            }

            function F(e) {
                let {
                    analyticsName: t,
                    onFetch: n,
                    channel: s,
                    messages: i,
                    hasMore: r,
                    loading: o,
                    loadMore: u,
                    onJump: c,
                    canCloseAllMessages: _ = !1,
                    renderHeader: T,
                    renderEmptyState: I,
                    renderMessage: m,
                    getProTip: A,
                    scrollerClassName: g,
                    className: C,
                    onCloseMessage: R,
                    listName: M
                } = e, D = (0, d.useStateFromStores)([N.default], () => {
                    let e = null != s ? N.default.getMessages(s.id) : null;
                    return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId)
                });

                function y(e, n) {
                    let {
                        id: l,
                        blocked: a,
                        author: s,
                        channel_id: i
                    } = e;
                    if (a) f.default.show({
                        title: L.default.Messages.UNBLOCK_TO_JUMP_TITLE,
                        body: L.default.Messages.UNBLOCK_TO_JUMP_BODY.format({
                            name: s.username
                        }),
                        confirmText: L.default.Messages.OKAY
                    });
                    else if (!D) {
                        let e = p.default.getChannel(i);
                        null != e && (E.default.trackJump(i, l, t), (0, S.transitionTo)(O.Routes.CHANNEL(e.getGuildId(), i, l))), null == c || c(n)
                    }
                }
                a.useEffect(() => {
                    n(s)
                }, [s, n]);
                let x = a.useMemo(() => null == i ? void 0 : i.map(e => ({
                    message: e,
                    channel: s
                })), [i, s]);
                return (0, l.jsx)(b, {
                    className: C,
                    scrollerClassName: g,
                    items: x,
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
                        if (null != m) return m(t, e => y(t, e));
                        let a = [];
                        return null == n ? [] : (a.push((0, l.jsxs)("div", {
                            className: v.messageGroupWrapper,
                            children: [(0, l.jsx)(h.default, {
                                className: v.messageGroupCozy,
                                message: t,
                                channel: n
                            }), (0, l.jsx)(U, {
                                channel: s,
                                message: t,
                                jumping: D,
                                canCloseAllMessages: _,
                                jumpTo: y,
                                onCloseMessage: R
                            })]
                        }, t.id)), a)
                    },
                    listName: M,
                    "aria-label": e["aria-label"]
                })
            }