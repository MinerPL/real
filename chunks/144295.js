            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return eg
                }
            }), a("424973"), a("222007");
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("355262"),
                r = a("446674"),
                u = a("77078"),
                o = a("851387"),
                c = a("737960"),
                f = a("731898"),
                m = a("834897"),
                h = a("510889"),
                E = a("665182"),
                g = a("624027"),
                I = a("462998"),
                _ = a("69927"),
                x = a("298878"),
                v = a("713810"),
                S = a("185014"),
                C = a("290886"),
                N = a("957687"),
                p = a("90713"),
                T = a("539938"),
                A = a("144491"),
                j = a("56778"),
                M = a("208021"),
                D = a("582713"),
                F = a("861570"),
                L = a("982108"),
                R = a("760190"),
                b = a("305961"),
                G = a("957255"),
                O = a("744983"),
                y = a("223383"),
                H = a("550515"),
                k = a("664336"),
                U = a("395118"),
                w = a("599110"),
                B = a("608275"),
                P = a("677315"),
                V = a("146005"),
                W = a("887446"),
                K = a("827298"),
                z = a("577177"),
                Y = a("75360"),
                Z = a("280110"),
                X = a("914878"),
                J = a("260730"),
                q = a("114935"),
                Q = a("20362"),
                $ = a("815619"),
                ee = a("543071"),
                et = a("49111"),
                ea = a("724210"),
                el = a("515631"),
                en = a("782340"),
                es = a("895976"),
                ei = a("305794"),
                ed = a("487577");
            let er = 936,
                eu = n.memo(function(e) {
                    let {
                        guild: t,
                        seenManagerRef: a
                    } = e, s = function(e, t) {
                        let {
                            showRefreshButton: a
                        } = P.GuildFeedRefreshButtonExperiment.useExperiment({
                            location: "69386d_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        n.useEffect(() => {
                            P.GuildFeedRefreshButtonExperiment.trackExposure({
                                location: "69386d_2"
                            })
                        }, []);
                        let s = (0, r.useStateFromStores)([G.default], () => G.default.can(et.Permissions.MANAGE_MESSAGES, e), [e]),
                            i = [];
                        return a && i.push((0, l.jsx)(k.Icon, {
                            tooltip: en.default.Messages.REFRESH,
                            icon: H.default,
                            onClick: function() {
                                (0, v.fetchGuildFeed)({
                                    guildId: e.id,
                                    refresh: !0,
                                    flushSeenItems: () => {
                                        var e;
                                        return null === (e = t.current) || void 0 === e ? void 0 : e.maybeFlushSeenItems(U.ForceFlushType.IMMEDIATE)
                                    }
                                })
                            }
                        })), s && i.push((0, l.jsx)(p.default, {
                            guildId: e.id
                        })), i
                    }(t, a);
                    return (0, l.jsxs)(T.default, {
                        channelId: ea.StaticChannelRoute.GUILD_HOME,
                        guildId: t.id,
                        className: i(ei.title, es.background),
                        innerClassname: es.headerBarInner,
                        toolbar: s,
                        children: [(0, l.jsx)(T.default.Icon, {
                            icon: y.default,
                            "aria-hidden": !0
                        }), (0, l.jsxs)(T.default.Title, {
                            children: [(0, l.jsx)(u.HiddenVisually, {
                                children: t.name
                            }), en.default.Messages.GUILD_HOME]
                        }), (0, l.jsx)(x.default, {})]
                    })
                }),
                eo = n.memo(function(e) {
                    let {
                        guild: t,
                        containerHeight: a,
                        isUsingCollapsedLayout: s
                    } = e, [i, d] = n.useState(0), {
                        ref: r,
                        height: o
                    } = (0, f.default)();
                    (0, z.default)(t.id), n.useEffect(() => {
                        if (null != o) d(o + 128 - a)
                    }, [a, o]);
                    let c = (0, u.useFocusJumpSection)(),
                        {
                            hasNewHeader: m
                        } = V.GuildHomeHeaderRedesignExperiment.useExperiment({
                            guildId: t.id,
                            location: "69386d_3"
                        }, {
                            autoTrackExposure: !1
                        });
                    return (0, l.jsx)("aside", {
                        className: es.widgets,
                        style: {
                            top: Math.min(-i, m ? -48 : 0)
                        },
                        children: (0, l.jsx)(u.FocusRing, {
                            children: (0, l.jsxs)("div", {
                                className: es.widgetsContainer,
                                ref: r,
                                tabIndex: s ? void 0 : 0,
                                "aria-label": en.default.Messages.GUILD_HOME_SIDEBAR_A11Y_LABEL,
                                ...s ? {} : c,
                                children: [m ? (0, l.jsx)(ee.default, {
                                    guild: t
                                }) : (0, l.jsx)(Q.default, {
                                    guild: t
                                }), (0, l.jsx)(X.default, {
                                    guildId: t.id,
                                    isUsingCollapsedLayout: s
                                }), (0, l.jsx)(q.default, {
                                    guild: t
                                })]
                            })
                        })
                    })
                });

            function ec(e) {
                let t, {
                        pageWidth: a,
                        onSidebarResize: n
                    } = e,
                    s = (0, r.useStateFromStores)([L.default], () => L.default.getSidebarState(ea.StaticChannelRoute.GUILD_HOME));
                if (null == s) return null;
                let i = a - et.CHANNEL_SIDEBAR_WIDTH - 552;
                return s.type === D.SidebarType.VIEW_THREAD ? t = (0, l.jsx)(F.default, {
                    channelId: s.channelId,
                    baseChannelId: ea.StaticChannelRoute.GUILD_HOME,
                    channelViewSource: "Home View"
                }) : s.type === D.SidebarType.VIEW_CHANNEL && (t = (0, l.jsx)(I.default, {
                    channelId: s.channelId,
                    baseChannelId: ea.StaticChannelRoute.GUILD_HOME,
                    channelViewSource: "Home View"
                })), (0, l.jsx)(E.default, {
                    sidebarType: E.ChatSidebarType.HomeSidebar,
                    maxWidth: i,
                    onWidthChange: n,
                    children: t
                })
            }
            let ef = [{
                label: "Segment Reads",
                value: el.GuildFeedRenderMode.SEGMENTED_READ
            }, {
                label: "Top",
                value: el.GuildFeedRenderMode.TOP
            }, {
                label: "New",
                value: el.GuildFeedRenderMode.NEW
            }];

            function em(e) {
                let {
                    renderMode: t,
                    setRenderMode: a
                } = e, {
                    showSelector: n
                } = P.GuildFeedRenderSelectorExperiment.useExperiment({
                    location: "69386d_4"
                }, {
                    autoTrackExposure: !1
                });
                return n ? (0, l.jsx)(u.Select, {
                    className: es.selector,
                    options: ef,
                    select: a,
                    isSelected: e => e === t,
                    serialize: e => String(e)
                }) : null
            }
            let eh = (0, c.default)(function(e) {
                    let {
                        guild: t,
                        width: a,
                        height: s
                    } = e, o = t.id, c = (0, r.useStateFromStores)([L.default], () => L.default.getSection(ea.StaticChannelRoute.GUILD_HOME)), E = (0, r.useStateFromStores)([O.default], () => O.default.getCurrentSearchId()), [g, I] = n.useState(!1), [x, v] = n.useState(et.DEFAULT_CHAT_SIDEBAR_WIDTH), C = c === et.ChannelSections.SEARCH, N = c === et.ChannelSections.SIDEBAR_CHAT, p = C || N, T = n.useRef(null), A = (0, h.default)("top-messages", T), {
                        ref: D
                    } = (0, f.default)(), [F, R] = n.useState(el.GuildFeedRenderMode.SEGMENTED_READ), b = (0, m.default)(el.COLLAPSED_SIZE_MEDIA_QUERY), G = n.useRef(!1), {
                        hasNewHeader: y
                    } = V.GuildHomeHeaderRedesignExperiment.useExperiment({
                        guildId: o,
                        location: "69386d_5"
                    }, {
                        autoTrackExposure: !1
                    }), {
                        homeHeaderScroll: H
                    } = (0, $.useHomeHeader)(t);
                    n.useEffect(() => {
                        G.current = !1
                    }, [o]), n.useEffect(() => {
                        let e = S.default.getLoadId(o);
                        null == e && M.default.closeChannelSidebar(ea.StaticChannelRoute.GUILD_HOME)
                    }, [o]), (0, Z.default)(o), n.useLayoutEffect(() => {
                        var e, t;
                        let a = W.default.getSavedScrollPosition(o);
                        return y && (0 === a || null == a) ? null === (e = T.current) || void 0 === e || e.scrollTo({
                            to: H
                        }) : null != a && (null === (t = T.current) || void 0 === t || t.scrollTo({
                            to: a
                        })), () => {
                            var e;
                            let t = null === (e = T.current) || void 0 === e ? void 0 : e.getScrollerState();
                            null != t && (0, B.saveGuildHomeScrollPosition)(o, t.scrollTop)
                        }
                    }, [o, y, H]);
                    let k = a - et.CHANNEL_SIDEBAR_WIDTH - x,
                        U = !(p && k < er) || b,
                        z = n.useRef(null),
                        Y = n.useCallback(() => {
                            !G.current && ((0, K.ackGuildHome)(o), G.current = !0, w.default.track(et.AnalyticEvents.HOME_FIRST_SCROLL_STARTED, {
                                guild_id: o,
                                home_session_id: W.default.getHomeSessionId(o)
                            }))
                        }, [o]);
                    (0, _.usePageTitle)({
                        location: en.default.Messages.GUILD_HOME_HTML_TITLE.format({
                            guildName: t.name
                        })
                    });
                    let X = (0, u.useFocusJumpSection)(),
                        {
                            showDeprecationNotice: q
                        } = P.GuildHomeDeprecationExperiment.useExperiment({
                            guildId: o,
                            location: "69386d_6"
                        }, {
                            autoTrackExposure: !1
                        }),
                        Q = U ? (0, l.jsx)(eo, {
                            guild: t,
                            containerHeight: s,
                            isUsingCollapsedLayout: b
                        }, "widgets") : null;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            className: i(ei.chat, es.background, {
                                [ei.threadSidebarOpen]: p,
                                [ei.threadSidebarFloating]: p && g
                            }),
                            children: [(0, l.jsx)(eu, {
                                guild: t,
                                seenManagerRef: z
                            }), (0, l.jsxs)("div", {
                                ref: D,
                                className: ei.content,
                                children: [(0, l.jsx)(d.ListNavigatorProvider, {
                                    navigator: A,
                                    children: (0, l.jsx)(d.ListNavigatorContainer, {
                                        children: e => {
                                            let {
                                                ref: a,
                                                ...n
                                            } = e;
                                            return (0, l.jsxs)(u.AdvancedScrollerAuto, {
                                                customTheme: !0,
                                                onScroll: Y,
                                                className: i(es.homeContainer, {
                                                    [es.homeContainerCollapsed]: b
                                                }),
                                                ref: e => {
                                                    var t;
                                                    T.current = e, a.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
                                                },
                                                ...n,
                                                ...X,
                                                children: [y && (0, l.jsx)($.default, {
                                                    guild: t
                                                }), b ? Q : null, (0, l.jsxs)("div", {
                                                    className: es.homeContent,
                                                    children: [q && !t.hasFeature(et.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE) && (0, l.jsxs)("div", {
                                                        className: es.deprecationNotice,
                                                        children: [(0, l.jsxs)("div", {
                                                            className: es.deprecationNoticeContent,
                                                            children: [(0, l.jsx)(u.Heading, {
                                                                className: es.heading,
                                                                variant: "heading-lg/semibold",
                                                                color: "always-white",
                                                                children: en.default.Messages.GUILD_HOME_DEPRECATION_TITLE
                                                            }), (0, l.jsx)(u.Text, {
                                                                variant: "text-md/normal",
                                                                color: "always-white",
                                                                children: en.default.Messages.GUILD_HOME_DEPRECATION_DESCRIPTION
                                                            })]
                                                        }), (0, l.jsx)("img", {
                                                            width: 180,
                                                            className: es.image,
                                                            src: ed,
                                                            alt: "",
                                                            "aria-hidden": !0
                                                        })]
                                                    }), (0, l.jsx)(u.HeadingLevel, {
                                                        component: (0, l.jsxs)("div", {
                                                            className: es.topMessagesHeader,
                                                            children: [(0, l.jsx)(u.Heading, {
                                                                variant: "heading-md/semibold",
                                                                children: en.default.Messages.GUILD_FEED_TITLE
                                                            }), (0, l.jsx)(em, {
                                                                renderMode: F,
                                                                setRenderMode: R
                                                            })]
                                                        }),
                                                        children: (0, l.jsx)(J.default, {
                                                            guild: t,
                                                            renderMode: F,
                                                            scrollerRef: T,
                                                            seenManagerRef: z
                                                        })
                                                    })]
                                                }), b ? null : Q]
                                            })
                                        }
                                    })
                                }), C && null != E && (0, l.jsx)(j.default, {
                                    searchId: E
                                })]
                            })]
                        }), N ? (0, l.jsx)(ec, {
                            pageWidth: a,
                            onSidebarResize: (e, t) => {
                                I(t), v(e)
                            }
                        }) : null]
                    })
                }),
                eE = (0, c.default)(N.default);
            var eg = function(e) {
                let {
                    guildId: t
                } = e, a = (0, r.useStateFromStores)([b.default], () => b.default.getGuild(t), [t]), s = (0, Y.default)(), i = (0, r.useStateFromStores)([R.default], () => R.default.hasLoadedExperiments), d = (0, C.useCanSeeOnboardingHome)(t);
                return (n.useLayoutEffect(() => {
                    (0, B.ensureGuildHomeSession)(t)
                }, [t]), n.useEffect(() => {
                    if (!i) return;
                    let e = W.default.getHomeSessionSource(t),
                        a = (0, P.canSeeGuildHome)(t) || d;
                    if (null != s) {
                        let {
                            channelId: t,
                            messageId: l
                        } = s;
                        if (!a) {
                            (0, A.transitionToMessage)(t, l);
                            return
                        }
                        e = el.GuildHomeLandingSource.HIGHLIGHTS
                    } else if (!a) {
                        o.default.escapeToDefaultChannel(t);
                        return
                    }(0, B.trackGuildHomeOpened)(t, e)
                }, [t, s, i, d]), null == a) ? (0, l.jsx)(g.default, {
                    channelId: void 0
                }) : d ? (0, l.jsx)(eE, {
                    guild: a
                }) : (0, l.jsx)(eh, {
                    guild: a
                })
            }