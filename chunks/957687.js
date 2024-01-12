            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return O
                }
            }), a("222007");
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("65597"),
                r = a("77078"),
                u = a("851387"),
                o = a("834897"),
                c = a("716241"),
                f = a("815619"),
                m = a("539938"),
                h = a("208021"),
                E = a("982108"),
                g = a("620193"),
                I = a("599110"),
                _ = a("347895"),
                x = a("698882"),
                v = a("675305"),
                S = a("363176"),
                C = a("414033"),
                N = a("831629"),
                p = a("749623"),
                T = a("112886"),
                A = a("768596"),
                j = a("49111"),
                M = a("724210"),
                D = a("515631"),
                F = a("782340"),
                L = a("139238"),
                R = a("305794");
            let b = C.MIN_GUILD_HOME_PAGE_WIDTH + 300 + 64,
                G = n.memo(function(e) {
                    let {
                        guild: t
                    } = e;
                    return (0, l.jsxs)(m.default, {
                        channelId: M.StaticChannelRoute.GUILD_HOME,
                        guildId: t.id,
                        className: i(L.title, L.background),
                        innerClassname: L.headerBarInner,
                        children: [(0, l.jsx)(m.default.Icon, {
                            icon: g.default,
                            "aria-hidden": !0
                        }), (0, l.jsxs)(m.default.Title, {
                            children: [(0, l.jsx)(r.HiddenVisually, {
                                children: t.name
                            }), F.default.Messages.SERVER_GUIDE]
                        })]
                    })
                });

            function O(e) {
                var t, a;
                let {
                    guild: s,
                    width: m
                } = e, g = (0, d.default)([E.default], () => E.default.getSection(M.StaticChannelRoute.GUILD_HOME)), [F, O] = n.useState(!1), [y, H] = n.useState(j.DEFAULT_CHAT_SIDEBAR_WIDTH), k = g === j.ChannelSections.SIDEBAR_CHAT, U = (0, r.useFocusJumpSection)(), w = (0, d.default)([x.default], () => x.default.getSettings(s.id)), B = null == w ? void 0 : w.welcomeMessage, P = (0, S.default)(s.id), V = !P && (null !== (a = null == w ? void 0 : null === (t = w.resourceChannels) || void 0 === t ? void 0 : t.length) && void 0 !== a ? a : 0) === 0, W = (0, o.default)(D.COLLAPSED_SIZE_MEDIA_QUERY), K = m - j.CHANNEL_SIDEBAR_WIDTH - y, z = k && K < b || W || V;
                return (n.useEffect(() => {
                    if (w === x.NO_SETTINGS)(0, _.fetchGuildHomeSettings)(s.id);
                    else if (null != w) {
                        var e, t, a, l, n;
                        I.default.track(j.AnalyticEvents.SERVER_GUIDE_VIEWED, {
                            ...(0, c.collectGuildAnalyticsMetadata)(s.id),
                            num_member_actions: null !== (a = null === (e = w.newMemberActions) || void 0 === e ? void 0 : e.length) && void 0 !== a ? a : 0,
                            num_member_actions_completed: Object.keys(null !== (l = v.default.getCompletedActions(s.id)) && void 0 !== l ? l : {}).length,
                            num_resource_channels: null !== (n = null === (t = w.resourceChannels) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0
                        })
                    }
                }, [s.id, w]), n.useEffect(() => () => {
                    h.default.closeChannelSidebar(M.StaticChannelRoute.GUILD_HOME)
                }, []), n.useEffect(() => {
                    V && w !== x.NO_SETTINGS && u.default.escapeToDefaultChannel(s.id)
                }, [s.id, V, w]), V) ? null : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: i(R.chat, L.background, {
                            [R.threadSidebarOpen]: k,
                            [R.threadSidebarFloating]: k && F
                        }),
                        children: [(0, l.jsx)(G, {
                            guild: s
                        }), (0, l.jsx)(r.AdvancedScrollerAuto, {
                            ...U,
                            children: (0, l.jsxs)("div", {
                                className: i(L.homeContainer, {
                                    [L.homeContainerCollapsed]: z
                                }),
                                children: [(0, l.jsx)("div", {
                                    className: L.maxWidthWrapper,
                                    children: (0, l.jsx)(f.default, {
                                        guild: s,
                                        titleClassName: W ? L.emptyHeaderTitle : void 0
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: i(L.homeContent, L.maxWidthWrapper),
                                    children: [(0, l.jsxs)("div", {
                                        className: L.mainContent,
                                        children: [P && (0, l.jsx)(A.default, {
                                            guildId: s.id,
                                            welcomeMessage: B
                                        }), P && (0, l.jsx)(p.default, {
                                            guildId: s.id
                                        }), !P || z ? (0, l.jsx)(T.default, {
                                            guild: s,
                                            isNewMember: P
                                        }) : null]
                                    }), z ? null : (0, l.jsx)(N.default, {
                                        guild: s,
                                        isNewMember: P
                                    })]
                                })]
                            })
                        })]
                    }), k ? (0, l.jsx)(C.default, {
                        pageWidth: m,
                        onSidebarResize: (e, t) => {
                            O(t), H(e)
                        }
                    }) : null]
                })
            }