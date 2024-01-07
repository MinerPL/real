            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                u = n("446674"),
                r = n("77078"),
                o = n("812204"),
                d = n("685665"),
                c = n("69927"),
                f = n("994906"),
                h = n("459824"),
                C = n("41594"),
                m = n("539938"),
                g = n("393414"),
                x = n("401642"),
                S = n("982108"),
                E = n("42203"),
                T = n("923959"),
                p = n("305961"),
                N = n("18494"),
                I = n("98292"),
                A = n("155207"),
                j = n("466818"),
                M = n("914985"),
                v = n("714247"),
                R = n("565556"),
                _ = n("891222"),
                b = n("49111"),
                L = n("724210"),
                B = n("782340"),
                k = n("973033"),
                G = n("305794");

            function y(e) {
                let {
                    guild: t,
                    previousChannel: n
                } = e, s = B.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE, i = B.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE;
                return (0, c.usePageTitle)({
                    location: t.name,
                    subsection: s
                }), (0, l.jsxs)(m.default, {
                    className: k.header,
                    innerClassname: k.innerHeader,
                    channelId: L.StaticChannelRoute.MEMBER_SAFETY,
                    guildId: t.id,
                    hideSearch: !0,
                    toolbar: null != n ? (0, l.jsx)(r.Button, {
                        className: k.returnButton,
                        size: r.Button.Sizes.SMALL,
                        look: r.Button.Looks.OUTLINED,
                        color: r.Button.Colors.PRIMARY,
                        onClick: () => {
                            null != n && (0, g.transitionToGuild)(t.id, n.id)
                        },
                        children: (0, l.jsx)(r.Text, {
                            className: k.returnButtonText,
                            variant: "text-xs/medium",
                            color: "none",
                            children: B.default.Messages.RETURN_TO_CHANNEL.format({
                                channelNameHook: () => null == n ? null : (0, l.jsxs)(a.Fragment, {
                                    children: [(0, l.jsx)(C.ChannelItemIcon, {
                                        className: k.returnIcon,
                                        guild: t,
                                        channel: n
                                    }), (0, l.jsx)(I.default, {
                                        children: (0, l.jsx)(r.Text, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            children: n.name
                                        })
                                    })]
                                }, n.id)
                            })
                        })
                    }) : (0, l.jsx)("div", {}),
                    children: [(0, l.jsx)(m.default.Icon, {
                        icon: A.default,
                        "aria-hidden": !0
                    }), (0, l.jsx)(m.default.Title, {
                        children: i
                    })]
                })
            }

            function F(e) {
                let {
                    guildId: t
                } = e, n = (0, u.useStateFromStores)([p.default], () => p.default.getGuild(t)), {
                    AnalyticsLocationProvider: s
                } = (0, d.default)(o.default.MEMBER_SAFETY_PAGE), c = (0, j.useCanAccessMemberSafetyPage)(t), C = (0, h.useCanAccessGuildMemberModView)(t), m = (0, u.useStateFromStores)([N.default], () => N.default.getLastSelectedChannelId(t)), I = (0, u.useStateFromStores)([E.default], () => E.default.getChannel(m)), A = a.useRef(null);
                a.useEffect(() => {
                    if (!c && null != n) {
                        var e;
                        let t = null === (e = T.default.getDefaultChannel(n.id)) || void 0 === e ? void 0 : e.id;
                        (0, g.transitionToGuild)(n.id, t)
                    }
                }, [n, c]);
                let B = (0, u.useStateFromStores)([S.default], () => null != S.default.getGuildSidebarState(t), [t]),
                    F = a.useCallback(e => {
                        C ? (0, f.openGuildMemberModViewSidebar)(e.guildId, e.userId, L.StaticChannelRoute.MEMBER_SAFETY) : (0, x.openUserProfileModal)({
                            userId: e.userId,
                            guildId: e.guildId,
                            analyticsLocation: {
                                section: b.AnalyticsSections.MEMBER_SAFETY_PAGE
                            }
                        })
                    }, [C]);
                return null != n && c ? (0, l.jsxs)(s, {
                    children: [(0, l.jsxs)("div", {
                        className: i(G.chat, k.page, {
                            [G.threadSidebarOpen]: B
                        }),
                        children: [(0, l.jsx)(y, {
                            guild: n,
                            previousChannel: I
                        }), (0, l.jsx)(r.AdvancedScroller, {
                            className: i(k.scroller),
                            ref: A,
                            children: (0, l.jsxs)("div", {
                                className: i(G.content, k.container),
                                children: [(0, l.jsx)(M.default, {
                                    guild: n
                                }), (0, l.jsx)(_.default, {
                                    guild: n,
                                    onMemberSelect: F
                                })]
                            })
                        }), (0, l.jsx)(R.default, {
                            guildId: n.id
                        })]
                    }), C && (0, l.jsx)(v.default, {
                        guildId: n.id
                    })]
                }) : null
            }