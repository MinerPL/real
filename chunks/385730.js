            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                },
                UnreadsCrashed: function() {
                    return v
                }
            }), n("222007");
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
                h = n("206230"),
                _ = n("510889"),
                S = n("826267"),
                T = n("599110"),
                p = n("659500"),
                N = n("150938"),
                I = n("805614"),
                m = n("64318"),
                g = n("474282"),
                A = n("970268"),
                C = n("49111"),
                R = n("782340"),
                M = n("930391");

            function O(e) {
                let {
                    setTab: t,
                    onJump: n,
                    showTutorial: s,
                    setSeenTutorial: r,
                    closePopout: O,
                    badgeState: v
                } = e, D = a.useRef(null), [y, x] = (0, A.default)(D), {
                    loadState: P,
                    channels: U
                } = y, {
                    maybeLoadMore: b,
                    markAllRead: F
                } = x;
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
                })(D, y, x),
                function(e, t) {
                    a.useEffect(() => {
                        let n = () => {
                            let n = e.channels.find(e => !e.collapsed);
                            null != n && t.markChannelRead(n)
                        };
                        return p.ComponentDispatch.subscribe(C.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ, n), () => {
                            p.ComponentDispatch.unsubscribe(C.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ, n)
                        }
                    }, [t, e.channels])
                }(y, x), a.useEffect(() => {
                    T.default.track(C.AnalyticEvents.OPEN_POPOUT, {
                        type: "Inbox"
                    })
                }, []), a.useEffect(() => (E.default.subscribe("CONNECTION_OPEN", O), () => {
                    E.default.unsubscribe("CONNECTION_OPEN", O)
                }), [O]);
                let j = (0, d.useStateFromStores)([h.default], () => h.default.messageGroupSpacing),
                    G = (0, _.default)("unreads", D);
                if (0 === U.length) {
                    var k;
                    return (0, l.jsxs)("div", {
                        className: M.container,
                        children: [(0, l.jsx)(m.default, {
                            tab: c.InboxTab.UNREADS,
                            setTab: t,
                            badgeState: v,
                            closePopout: O
                        }), (0, l.jsx)(I.default, {
                            Icon: S.default,
                            header: R.default.Messages.UNREADS_EMPTY_STATE_HEADER,
                            tip: (null === (k = o.os) || void 0 === k ? void 0 : k.family) === "OS X" ? R.default.Messages.UNREADS_EMPTY_STATE_TIP_MAC : R.default.Messages.UNREADS_EMPTY_STATE_TIP
                        })]
                    })
                }
                return (0, l.jsxs)("div", {
                    className: i(M.container, "group-spacing-".concat(j)),
                    "aria-label": R.default.Messages.UNREADS_TAB_LABEL,
                    children: [(0, l.jsx)(m.default, {
                        tab: c.InboxTab.UNREADS,
                        setTab: t,
                        badgeState: v,
                        closePopout: O,
                        children: (0, l.jsx)(N.default, {
                            type: "top-header",
                            onClick: F
                        })
                    }), (0, l.jsx)(u.ListNavigatorProvider, {
                        navigator: G,
                        children: (0, l.jsx)(u.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: t,
                                    ...a
                                } = e;
                                return (0, l.jsxs)(f.AdvancedScrollerThin, {
                                    ref: e => {
                                        var n;
                                        D.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
                                    },
                                    ...a,
                                    onScroll: P === A.LoadState.Done ? void 0 : b,
                                    className: M.scroller,
                                    children: [s ? (0, l.jsx)(L, {
                                        setSeenTutorial: r
                                    }) : null, (0, g.default)(U, x, n), P === A.LoadState.Done ? null : (0, l.jsx)(f.Spinner, {
                                        className: M.spinner
                                    })]
                                })
                            }
                        })
                    })]
                })
            }

            function L(e) {
                let {
                    setSeenTutorial: t
                } = e;
                return (0, l.jsxs)("div", {
                    className: M.tutorial,
                    children: [(0, l.jsx)("div", {
                        className: M.tutorialIcon,
                        children: (0, l.jsx)(S.default, {
                            width: 24,
                            height: 24
                        })
                    }), (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(f.Heading, {
                            className: M.tutorialHeader,
                            variant: "heading-md/semibold",
                            children: R.default.Messages.UNREADS_TUTORIAL_HEADER
                        }), (0, l.jsx)(f.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: R.default.Messages.UNREADS_TUTORIAL_BODY
                        }), (0, l.jsx)(f.Button, {
                            className: M.tutorialButton,
                            onClick: t,
                            size: f.Button.Sizes.SMALL,
                            children: R.default.Messages.TUTORIAL_CLOSE
                        })]
                    })]
                })
            }

            function v(e) {
                let {
                    setTab: t,
                    badgeState: n,
                    closePopout: a
                } = e;
                return (0, l.jsxs)("div", {
                    className: M.container,
                    children: [(0, l.jsx)(m.default, {
                        tab: c.InboxTab.UNREADS,
                        setTab: t,
                        badgeState: n,
                        closePopout: a
                    }), (0, l.jsx)(I.default, {
                        Icon: S.default,
                        disableStars: !0,
                        header: R.default.Messages.UNREADS_EMPTY_STATE_ERROR_HEADER,
                        tip: R.default.Messages.UNREADS_EMPTY_STATE_ERROR_SUBTITLE
                    })]
                })
            }