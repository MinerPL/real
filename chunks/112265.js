            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                u = n("446674"),
                d = n("77078"),
                o = n("812204"),
                r = n("685665"),
                c = n("69927"),
                f = n("994906"),
                h = n("459824"),
                m = n("41594"),
                S = n("539938"),
                g = n("393414"),
                x = n("401642"),
                E = n("982108"),
                T = n("42203"),
                C = n("923959"),
                I = n("305961"),
                p = n("18494"),
                A = n("98292"),
                N = n("155207"),
                j = n("466818"),
                M = n("914985"),
                _ = n("714247"),
                R = n("565556"),
                v = n("891222"),
                b = n("49111"),
                B = n("724210"),
                k = n("782340"),
                L = n("973033"),
                G = n("305794");

            function F(e) {
                let {
                    guild: t,
                    previousChannel: n
                } = e, s = k.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE, i = k.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE;
                return (0, c.usePageTitle)({
                    location: t.name,
                    subsection: s
                }), (0, l.jsxs)(S.default, {
                    className: L.header,
                    innerClassname: L.innerHeader,
                    channelId: B.StaticChannelRoute.MEMBER_SAFETY,
                    guildId: t.id,
                    hideSearch: !0,
                    toolbar: null != n ? (0, l.jsx)(d.Button, {
                        className: L.returnButton,
                        size: d.Button.Sizes.SMALL,
                        look: d.Button.Looks.OUTLINED,
                        color: d.Button.Colors.PRIMARY,
                        onClick: () => {
                            null != n && (0, g.transitionToGuild)(t.id, n.id)
                        },
                        children: (0, l.jsx)(d.Text, {
                            className: L.returnButtonText,
                            variant: "text-xs/medium",
                            color: "none",
                            children: k.default.Messages.RETURN_TO_CHANNEL.format({
                                channelNameHook: () => null == n ? null : (0, l.jsxs)(a.Fragment, {
                                    children: [(0, l.jsx)(m.ChannelItemIcon, {
                                        className: L.returnIcon,
                                        guild: t,
                                        channel: n
                                    }), (0, l.jsx)(A.default, {
                                        children: (0, l.jsx)(d.Text, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            children: n.name
                                        })
                                    })]
                                }, n.id)
                            })
                        })
                    }) : (0, l.jsx)("div", {}),
                    children: [(0, l.jsx)(S.default.Icon, {
                        icon: N.default,
                        "aria-hidden": !0
                    }), (0, l.jsx)(S.default.Title, {
                        children: i
                    })]
                })
            }

            function y(e) {
                let {
                    guildId: t
                } = e, n = (0, u.useStateFromStores)([I.default], () => I.default.getGuild(t)), {
                    AnalyticsLocationProvider: s
                } = (0, r.default)(o.default.MEMBER_SAFETY_PAGE), c = (0, j.useCanAccessMemberSafetyPage)(t), m = (0, h.useCanAccessGuildMemberModView)(t), S = (0, u.useStateFromStores)([p.default], () => p.default.getLastSelectedChannelId(t)), A = (0, u.useStateFromStores)([T.default], () => T.default.getChannel(S)), N = a.useRef(null);
                a.useEffect(() => {
                    if (!c && null != n) {
                        var e;
                        let t = null === (e = C.default.getDefaultChannel(n.id)) || void 0 === e ? void 0 : e.id;
                        (0, g.transitionToGuild)(n.id, t)
                    }
                }, [n, c]);
                let k = (0, u.useStateFromStores)([E.default], () => null != E.default.getGuildSidebarState(t), [t]),
                    y = a.useCallback(e => {
                        m ? (0, f.openGuildMemberModViewSidebar)(e.guildId, e.userId, B.StaticChannelRoute.MEMBER_SAFETY) : (0, x.openUserProfileModal)({
                            userId: e.userId,
                            guildId: e.guildId,
                            analyticsLocation: {
                                section: b.AnalyticsSections.MEMBER_SAFETY_PAGE
                            }
                        })
                    }, [m]);
                return null != n && c ? (0, l.jsxs)(s, {
                    children: [(0, l.jsxs)("div", {
                        className: i(G.chat, L.page, {
                            [G.threadSidebarOpen]: k
                        }),
                        children: [(0, l.jsx)(F, {
                            guild: n,
                            previousChannel: A
                        }), (0, l.jsx)(d.AdvancedScroller, {
                            className: i(L.scroller),
                            ref: N,
                            children: (0, l.jsxs)("div", {
                                className: i(G.content, L.container),
                                children: [(0, l.jsx)(M.default, {
                                    guild: n
                                }), (0, l.jsx)(v.default, {
                                    guild: n,
                                    onMemberSelect: y
                                })]
                            })
                        }), (0, l.jsx)(R.default, {
                            guildId: n.id
                        })]
                    }), m && (0, l.jsx)(_.default, {
                        guildId: n.id
                    })]
                }) : null
            }