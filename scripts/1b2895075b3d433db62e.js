(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["4359"], {
        134947: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useTrackThreadBrowserTab: function() {
                    return x
                },
                useActiveThreads: function() {
                    return v
                },
                useActiveGuildThreads: function() {
                    return _
                },
                useArchivedThreads: function() {
                    return N
                }
            });
            var s = a("773670"),
                l = a("427964"),
                r = a.n(l),
                n = a("498225"),
                d = a("404607"),
                u = a("42203"),
                i = a("957255"),
                o = a("660478"),
                c = a("449008"),
                f = a("299039"),
                h = a("689275"),
                m = a("821343"),
                g = a("755624"),
                S = a("263024"),
                T = a("487269"),
                E = a("809924");

            function x() {
                s.useEffect(() => {
                    (0, T.trackThreadBrowserTab)()
                }, [])
            }

            function v(e) {
                let t = function(e) {
                        let t = (0, n.useStateFromStoresArray)([i.default, h.default, u.default], () => r(h.default.getThreadsForParent(e.guild_id, e.id)).values().map(e => {
                            let {
                                id: t
                            } = e;
                            return u.default.getChannel(t)
                        }).filter(c.isNotNullish).filter(e => i.default.can(E.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e.guild_id, e.id]);
                        return s.useMemo(() => r(t).sort((e, t) => f.default.compare(o.default.lastMessageId(e), o.default.lastMessageId(t))).reverse().value(), [t])
                    }(e),
                    [a, l] = (0, n.useStateFromStores)([g.default], () => r.partition(t, e => g.default.hasJoined(e)), [t], n.statesWillNeverBeEqual);
                return {
                    joinedThreadIds: a,
                    unjoinedThreadIds: l
                }
            }

            function _(e) {
                let t = (0, n.useStateFromStoresArray)([i.default, h.default, u.default], () => r(h.default.getThreadsForGuild(e)).values().map(e => r.values(e)).flatten().map(e => {
                    let {
                        id: t
                    } = e;
                    return u.default.getChannel(t)
                }).filter(c.isNotNullish).filter(e => i.default.can(E.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e]);
                return s.useMemo(() => r(t).sort((e, t) => f.default.compare(o.default.lastMessageId(e), o.default.lastMessageId(t))).reverse().value(), [t])
            }

            function N(e, t, a) {
                let {
                    canLoadMore: l,
                    loading: o,
                    nextOffset: c,
                    isInitialLoad: f
                } = (0, n.useStateFromStoresObject)([m.default], () => ({
                    loading: m.default.isLoading(e.id, t, a),
                    isInitialLoad: m.default.isInitialLoad,
                    canLoadMore: m.default.canLoadMore,
                    nextOffset: m.default.nextOffset
                })), h = s.useCallback(() => {
                    i.default.can(E.Permissions.READ_MESSAGE_HISTORY, e) && S.default.loadArchivedThreads(e.guild_id, e.id, t, a, c)
                }, [e, t, a, c]);
                s.useEffect(() => {
                    f && h()
                }, [e.id, t, a, f]), s.useEffect(() => {
                    d.default.resort(e.id)
                }, [e.id]);
                let g = (0, n.useStateFromStoresArray)([m.default, u.default, i.default], () => r(m.default.getThreads(e.id, t, a)).filter(e => {
                    let t = u.default.getChannel(e);
                    return null != t && i.default.can(E.Permissions.VIEW_CHANNEL, t)
                }).value());
                return {
                    threadIds: g,
                    canLoadMore: l,
                    loading: o || f,
                    loadMore: h
                }
            }
        },
        998688: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var s = a("920040"),
                l = a("773670"),
                r = a("575482"),
                n = a.n(r),
                d = a("77078"),
                u = a("722602"),
                i = a("913979"),
                o = a("782340"),
                c = a("684992");

            function f(e) {
                let {
                    channel: t,
                    threadIds: a,
                    startThread: r,
                    goToThread: f
                } = e, h = l.useCallback(e => (0, s.jsx)(i.default, {
                    threadId: a[e.row],
                    goToThread: f
                }, "".concat(e.section, "-").concat(e.row)), [a, f]);
                return 0 === a.length ? (0, s.jsx)(u.default, {
                    channel: t,
                    header: o.default.Messages.THREAD_BROWSER_EMPTY_STATE_HEADER,
                    startThread: r
                }) : (0, s.jsx)(d.List, {
                    className: n(c.list, c.activeThreadsList),
                    fade: !0,
                    sections: [a.length],
                    sectionHeight: 0,
                    rowHeight: 80,
                    renderRow: h,
                    renderSection: () => null,
                    chunkSize: 20
                })
            }
        },
        537560: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return R
                }
            });
            var s = a("920040"),
                l = a("773670"),
                r = a("575482"),
                n = a.n(r),
                d = a("498225"),
                u = a("77078"),
                i = a("957255"),
                o = a("810567"),
                c = a("945330"),
                f = a("959097"),
                h = a("263024"),
                m = a("300322"),
                g = a("487269"),
                S = a("998688"),
                T = a("695385"),
                E = a("967241"),
                x = a("648564"),
                v = a("49111"),
                _ = a("782340"),
                N = a("43187");

            function R(e) {
                let {
                    channel: t,
                    className: a,
                    onClose: r
                } = e, o = (0, d.useStateFromStores)([i.default], () => i.default.can(v.Permissions.READ_MESSAGE_HISTORY, t)), R = (0, m.useCanStartThread)(t), j = () => {
                    r(), (0, E.openThreadSidebarForCreating)(t, void 0, "Thread Browser Empty State")
                }, M = l.useCallback((e, t) => {
                    r(), (0, E.openThreadSidebarForViewing)(e, !t, x.OpenThreadAnalyticsLocations.BROWSER)
                }, [r]), C = function(e, t) {
                    let [a, s] = l.useState(""), [r, n] = l.useState(!1), [d, u] = l.useState(!1), [i, o] = l.useState([]), c = async () => {
                        if (null != a && "" !== a) {
                            if (!r) {
                                n(!0);
                                try {
                                    let s = await h.default.searchThreads(e, t, a);
                                    u(!0), o(s)
                                } finally {
                                    n(!1)
                                }
                            }
                        }
                    };
                    return {
                        query: a,
                        setQuery: e => {
                            s(e), 0 === e.length && u(!1)
                        },
                        isLoading: r,
                        hasResults: d,
                        submit: c,
                        results: i
                    }
                }(t.guild_id, t.id);
                return l.useEffect(() => {
                    (0, g.trackThreadBrowserTab)()
                }, []), (0, s.jsx)("div", {
                    className: n(a, N.container),
                    children: (0, s.jsx)(u.HeadingLevel, {
                        component: (0, s.jsxs)("div", {
                            className: N.header,
                            children: [(0, s.jsx)(f.default, {
                                className: N.threadIcon
                            }), (0, s.jsx)(u.Heading, {
                                variant: "heading-md/semibold",
                                className: N.title,
                                children: _.default.Messages.THREAD_BROWSER_TITLE
                            }), o ? (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)("div", {
                                    className: N.divider
                                }), (0, s.jsx)(A, {
                                    ...C
                                })]
                            }) : null, (0, s.jsx)("div", {
                                className: N.spacer
                            }), R ? (0, s.jsx)(u.Button, {
                                size: u.Button.Sizes.MIN,
                                className: N.createButton,
                                onClick: () => {
                                    r(), (0, E.openThreadSidebarForCreating)(t, void 0, "Thread Browser Toolbar")
                                },
                                children: _.default.Messages.CREATE
                            }) : null, (0, s.jsx)(u.Clickable, {
                                className: N.closeIcon,
                                onClick: r,
                                "aria-label": _.default.Messages.CLOSE,
                                children: (0, s.jsx)(c.default, {})
                            })]
                        }),
                        children: C.hasResults ? (0, s.jsx)(S.default, {
                            channel: t,
                            startThread: j,
                            goToThread: M,
                            threadIds: C.results
                        }) : (0, s.jsx)(T.default, {
                            channel: t,
                            startThread: j,
                            goToThread: M
                        })
                    })
                })
            }

            function A(e) {
                let {
                    query: t,
                    setQuery: a,
                    submit: l,
                    isLoading: r
                } = e;
                return (0, s.jsx)(o.default, {
                    autoFocus: !0,
                    className: N.searchBox,
                    query: t,
                    isLoading: r,
                    onChange: e => a(e),
                    onClear: () => a(""),
                    onKeyDown: e => "Enter" === e.key && l(),
                    placeholder: _.default.Messages.SEARCH_THREAD_NAMES,
                    "aria-label": _.default.Messages.SEARCH_THREAD_NAMES
                })
            }
        },
        722602: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var s = a("920040");
            a("773670");
            var l = a("77078"),
                r = a("543289"),
                n = a("959097"),
                d = a("300322"),
                u = a("782340"),
                i = a("489273");

            function o(e) {
                let {
                    channel: t,
                    header: a,
                    startThread: o
                } = e, c = (0, d.useCanStartPublicThread)(t), f = (0, d.useCanStartPrivateThread)(t);
                return (0, s.jsxs)("div", {
                    className: i.container,
                    children: [(0, s.jsxs)("div", {
                        className: i.iconContainer,
                        children: [(0, s.jsx)("div", {
                            className: i.icon,
                            children: (0, s.jsx)(n.default, {
                                width: 36,
                                height: 36
                            })
                        }), (0, s.jsx)(r.default, {
                            className: i.stars
                        })]
                    }), (0, s.jsx)(l.Heading, {
                        className: i.header,
                        variant: "heading-xl/semibold",
                        children: a
                    }), (0, s.jsx)(l.Text, {
                        color: "header-secondary",
                        variant: "text-md/normal",
                        children: u.default.Messages.THREAD_BROWSER_EMPTY_STATE_SUBTEXT
                    }), c || f ? (0, s.jsx)(l.Button, {
                        className: i.cta,
                        onClick: o,
                        children: u.default.Messages.CREATE_THREAD
                    }) : null]
                })
            }
        },
        913979: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return S
                }
            });
            var s = a("920040"),
                l = a("773670"),
                r = a("498225"),
                n = a("77078"),
                d = a("272030"),
                u = a("42203"),
                i = a("124948"),
                o = a("697218"),
                c = a("811305"),
                f = a("800843"),
                h = a("442184"),
                m = a("648564"),
                g = a("159278"),
                S = l.memo(function(e) {
                    let {
                        threadId: t,
                        goToThread: l,
                        showChannelName: i
                    } = e, o = (0, r.useStateFromStores)([u.default], () => u.default.getChannel(t)), c = (0, r.useStateFromStores)([u.default], () => u.default.getChannel(o.parent_id));
                    return (0, s.jsxs)(n.Clickable, {
                        className: g.container,
                        onClick: e => l(o, e.shiftKey),
                        onContextMenu: e => (0, d.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await a.el("994827").then(a.bind(a, "994827"));
                            return t => (0, s.jsx)(e, {
                                ...t,
                                channel: o
                            })
                        }),
                        children: [(0, s.jsxs)("div", {
                            className: g.left,
                            children: [(0, s.jsxs)(n.Heading, {
                                className: g.threadNameLine,
                                variant: "heading-md/semibold",
                                children: [(0, s.jsx)("span", {
                                    className: g.threadName,
                                    children: o.name
                                }), i && null != c ? (0, s.jsx)("span", {
                                    className: g.parentName,
                                    children: "#".concat(c.name)
                                }) : null]
                            }), (0, h.default)(o)]
                        }), (0, s.jsx)(T, {
                            channel: o
                        })]
                    })
                });

            function T(e) {
                var t, a;
                let {
                    channel: n
                } = e, d = (0, r.useStateFromStores)([f.default], () => null !== (t = f.default.getMemberIdsPreview(n.id)) && void 0 !== t ? t : []), u = (0, r.useStateFromStores)([f.default], () => null !== (a = f.default.getMemberCount(n.id)) && void 0 !== a ? a : 0), h = (0, r.useStateFromStoresArray)([o.default], () => d.map(e => o.default.getUser(e)));
                return (l.useEffect(() => {
                    d.filter((e, t) => null == h[t]).forEach(e => {
                        i.default.requestMember(n.guild_id, e)
                    })
                }, []), 0 === d.length) ? null : (0, s.jsx)(c.default, {
                    className: g.facepile,
                    showDefaultAvatarsForNullUsers: !0,
                    guildId: n.guild_id,
                    users: h,
                    count: u,
                    max: m.MAX_THREAD_MEMBERS_PREVIEW
                })
            }
        },
        442184: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return j
                }
            });
            var s = a("920040"),
                l = a("773670"),
                r = a("498225"),
                n = a("77078"),
                d = a("308289"),
                u = a("750560"),
                i = a("619335"),
                o = a("95045"),
                c = a("574073"),
                f = a("26989"),
                h = a("660478"),
                m = a("27618"),
                g = a("697218"),
                S = a("959097"),
                T = a("708062"),
                E = a("299039"),
                x = a("158998"),
                v = a("610730"),
                _ = a("487269"),
                N = a("719347"),
                R = a("782340"),
                A = a("159278");

            function j(e) {
                return e.isActiveThread() ? (0, s.jsx)(M, {
                    channel: e
                }) : (0, s.jsx)(I, {
                    channel: e
                })
            }

            function M(e) {
                let {
                    channel: t
                } = e, a = (0, r.useStateFromStores)([v.default], () => v.default.getMostRecentMessage(t.id));
                return null == a ? (0, s.jsx)(C, {
                    channel: t
                }) : (0, s.jsx)(p, {
                    channel: t,
                    message: a
                })
            }

            function C(e) {
                let {
                    channel: t
                } = e, a = (0, _.useLastMessageTimestamp)(t);
                return (0, s.jsxs)(n.Text, {
                    className: A.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [R.default.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES, "\xa0 • \xa0", (0, _.getTimestampString)(a)]
                })
            }

            function p(e) {
                var t;
                let {
                    channel: a,
                    message: i
                } = e;
                (0, u.useSubscribeGuildMembers)({
                    [a.guild_id]: [i.author.id]
                });
                let f = (0, r.useStateFromStores)([g.default], () => null !== (t = g.default.getUser(i.author.id)) && void 0 !== t ? t : i.author),
                    {
                        nick: h,
                        colorString: S
                    } = (0, c.default)(i),
                    x = (0, r.useStateFromStores)([m.default], () => m.default.isBlocked(i.author.id)),
                    v = l.useMemo(() => {
                        let e = null != i.content && "" !== i.content ? (0, o.default)(i, {
                                formatInline: !0
                            }).content : null,
                            {
                                contentPlaceholder: t,
                                renderedContent: a,
                                icon: l
                            } = (0, T.renderSingleLineMessage)(i, e, x, A.messageContent, {
                                iconClass: A.messageContentIcon,
                                iconSize: N.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                            });
                        return (0, s.jsxs)(s.Fragment, {
                            children: [null != a ? a : (0, s.jsx)("span", {
                                children: t
                            }), l]
                        })
                    }, [i, x]);
                return (0, s.jsxs)(n.Text, {
                    className: A.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [(0, s.jsx)(d.default, {
                        className: A.avatar,
                        user: f,
                        size: n.AvatarSizes.SIZE_16
                    }), (0, s.jsx)(n.NameWithRole, {
                        name: h,
                        color: S,
                        className: A.authorName
                    }), ":\xa0", v, "\xa0 • \xa0", (0, _.getTimestampString)(E.default.extractTimestamp(i.id))]
                })
            }

            function I(e) {
                var t, a, l;
                let {
                    channel: o
                } = e, c = (0, r.useStateFromStores)([h.default], () => h.default.lastMessageId(o.id)), m = null == c ? new Date(null !== (a = null === (t = o.threadMetadata) || void 0 === t ? void 0 : t.archiveTimestamp) && void 0 !== a ? a : Date.now()).getTime() : E.default.extractTimestamp(c);
                (0, u.useSubscribeGuildMembers)({
                    [o.guild_id]: [o.ownerId]
                });
                let T = (0, r.useStateFromStores)([g.default], () => g.default.getUser(o.ownerId)),
                    v = (0, r.useStateFromStores)([f.default], () => f.default.getMember(o.guild_id, o.ownerId)),
                    N = null !== (l = (0, i.default)(o)) && void 0 !== l ? l : S.default;
                return (0, s.jsx)(n.Text, {
                    className: A.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == T ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: A.noAvatarIcon,
                            children: (0, s.jsx)(N, {
                                width: 10,
                                height: 10
                            })
                        }), R.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, _.getTimestampString)(m)
                        })]
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(d.default, {
                            className: A.avatar,
                            user: T,
                            size: n.AvatarSizes.SIZE_16
                        }), R.default.Messages.THREAD_BROWSER_STARTED_BY.format({
                            authorHook(e, t) {
                                var a, l;
                                return (0, s.jsx)(n.NameWithRole, {
                                    className: A.startedByName,
                                    color: null !== (a = null == v ? void 0 : v.colorString) && void 0 !== a ? a : void 0,
                                    name: null !== (l = null == v ? void 0 : v.nick) && void 0 !== l ? l : x.default.getName(T)
                                }, t)
                            }
                        }), (0, s.jsx)("span", {
                            className: A.bullet,
                            children: "•"
                        }), R.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, _.getTimestampString)(m)
                        })]
                    })
                })
            }
        },
        695385: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return h
                }
            });
            var s = a("920040"),
                l = a("773670"),
                r = a("497411"),
                n = a("77078"),
                d = a("134947"),
                u = a("722602"),
                i = a("913979"),
                o = a("782340"),
                c = a("684992");
            let f = new Set;

            function h(e) {
                let {
                    channel: t,
                    startThread: a,
                    goToThread: h
                } = e, {
                    joinedThreadIds: g,
                    unjoinedThreadIds: S
                } = (0, d.useActiveThreads)(t), {
                    threadIds: T,
                    canLoadMore: E,
                    loading: x,
                    loadMore: v
                } = (0, d.useArchivedThreads)(t, r.ThreadSortOrder.LATEST_ACTIVITY, f), _ = l.useRef(null);
                (0, d.useTrackThreadBrowserTab)();
                let N = l.useCallback(e => {
                        let t = 0 === e.section ? g : 1 === e.section ? S : T;
                        return (0, s.jsx)(i.default, {
                            threadId: t[e.row],
                            goToThread: h
                        }, "".concat(e.section, "-").concat(e.row))
                    }, [T, g, S, h]),
                    R = l.useCallback(e => 0 === e.section ? (0, s.jsx)(m, {
                        text: o.default.Messages.THREAD_BROWSER_JOINED_HEADER.format({
                            count: g.length
                        })
                    }, e.section) : 1 === e.section ? (0, s.jsx)(m, {
                        text: o.default.Messages.THREAD_BROWSER_OTHER_HEADER.format({
                            count: S.length
                        })
                    }, e.section) : (0, s.jsx)(m, {
                        text: o.default.Messages.THREAD_BROWSER_ARCHIVED_HEADER
                    }, e.section), [g.length, S.length]),
                    A = l.useCallback(e => 1 === e && g.length > 0 ? 64 : 2 === e && (g.length > 0 || S.length > 0) ? 64 : 32, [g.length, S.length]),
                    j = l.useCallback(() => {
                        var e;
                        let t = null === (e = _.current) || void 0 === e ? void 0 : e.getScrollerState();
                        if (null == t) return;
                        let a = t.scrollTop + t.offsetHeight,
                            s = t.scrollHeight - a;
                        s < 200 && v()
                    }, [v]);
                if (0 === g.length && 0 === S.length && 0 === T.length) return x ? (0, s.jsx)("div", {
                    className: c.list,
                    children: (0, s.jsx)(n.Spinner, {
                        className: c.spinner
                    })
                }) : (0, s.jsx)("div", {
                    className: c.list,
                    children: (0, s.jsx)(u.default, {
                        channel: t,
                        header: o.default.Messages.THREAD_BROWSER_EMPTY_STATE_HEADER,
                        startThread: a
                    })
                });
                return (0, s.jsx)(n.List, {
                    ref: _,
                    className: c.list,
                    fade: !0,
                    sections: [g.length, S.length, T.length],
                    sectionHeight: A,
                    rowHeight: 80,
                    renderRow: N,
                    renderSection: R,
                    chunkSize: 20,
                    onScroll: E ? j : void 0
                })
            }

            function m(e) {
                let {
                    text: t
                } = e;
                return (0, s.jsx)(n.Text, {
                    color: "header-secondary",
                    variant: "text-xs/bold",
                    className: c.sectionHeader,
                    children: t
                })
            }
        }
    }
]);