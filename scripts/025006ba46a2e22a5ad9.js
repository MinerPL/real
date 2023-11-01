(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["17001"], {
        994906: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                openGuildMemberModViewSidebar: function() {
                    return i
                }
            });
            var a = l("208021"),
                d = l("582713"),
                n = l("459824");

            function i(e, t, l) {
                (0, n.canAccessGuildMemberModViewWithExperiment)(e) && a.default.openGuildSidebar({
                    guildId: e,
                    baseChannelId: l,
                    sidebarType: d.GuildSidebarType.GUILD_MEMBER_MOD_VIEW,
                    details: {
                        type: d.SidebarOpenDetailsType.GUILD_MEMBER_MOD_VIEW,
                        userId: t,
                        guildId: e
                    }
                })
            }
        },
        714247: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            });
            var a = l("37983"),
                d = l("884691"),
                n = l("446674"),
                i = l("812204"),
                u = l("685665"),
                s = l("744568"),
                r = l("208021"),
                o = l("982108"),
                c = l("305961"),
                f = l("49111"),
                S = l("973033");

            function h(e) {
                let {
                    guildId: t
                } = e, l = (0, n.useStateFromStores)([c.default], () => c.default.getGuild(t)), {
                    AnalyticsLocationProvider: h
                } = (0, u.default)(i.default.MEMBER_SAFETY_PAGE), E = (0, n.useStateFromStores)([o.default], () => o.default.getGuildSidebarState(t), [t]), g = d.useCallback(() => {
                    r.default.closeGuildSidebar(t)
                }, [t]);
                return null != l && null != E && null != E ? (0, a.jsx)(h, {
                    children: (0, a.jsx)("div", {
                        className: S.sidebarContainer,
                        style: {
                            width: f.DEFAULT_CHAT_SIDEBAR_WIDTH
                        },
                        children: (0, a.jsx)(s.default, {
                            userId: E.details.userId,
                            guildId: E.details.guildId,
                            onClose: g
                        })
                    })
                }) : null
            }
        },
        112265: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return D
                }
            });
            var a = l("37983"),
                d = l("884691"),
                n = l("414456"),
                i = l.n(n),
                u = l("446674"),
                s = l("77078"),
                r = l("812204"),
                o = l("685665"),
                c = l("69927"),
                f = l("994906"),
                S = l("459824"),
                h = l("41594"),
                E = l("539938"),
                g = l("393414"),
                m = l("401642"),
                M = l("982108"),
                x = l("42203"),
                I = l("923959"),
                j = l("305961"),
                C = l("18494"),
                T = l("98292"),
                _ = l("155207"),
                b = l("466818"),
                A = l("914985"),
                N = l("714247"),
                p = l("565556"),
                G = l("891222"),
                R = l("49111"),
                v = l("724210"),
                B = l("782340"),
                L = l("973033"),
                F = l("305794");

            function k(e) {
                let {
                    guild: t,
                    previousChannel: l
                } = e, n = B.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE, i = B.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE;
                return (0, c.usePageTitle)({
                    location: t.name,
                    subsection: n
                }), (0, a.jsxs)(E.default, {
                    className: L.header,
                    innerClassname: L.innerHeader,
                    channelId: v.StaticChannelRoute.MEMBER_SAFETY,
                    guildId: t.id,
                    hideSearch: !0,
                    toolbar: null != l ? (0, a.jsx)(s.Button, {
                        className: L.returnButton,
                        size: s.Button.Sizes.SMALL,
                        look: s.Button.Looks.OUTLINED,
                        color: s.Button.Colors.PRIMARY,
                        onClick: () => {
                            null != l && (0, g.transitionToGuild)(t.id, l.id)
                        },
                        children: (0, a.jsx)(s.Text, {
                            className: L.returnButtonText,
                            variant: "text-xs/medium",
                            color: "none",
                            children: B.default.Messages.RETURN_TO_CHANNEL.format({
                                channelNameHook: () => null == l ? null : (0, a.jsxs)(d.Fragment, {
                                    children: [(0, a.jsx)(h.ChannelItemIcon, {
                                        className: L.returnIcon,
                                        guild: t,
                                        channel: l
                                    }), (0, a.jsx)(T.default, {
                                        children: (0, a.jsx)(s.Text, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            children: l.name
                                        })
                                    })]
                                }, l.id)
                            })
                        })
                    }) : (0, a.jsx)("div", {}),
                    children: [(0, a.jsx)(E.default.Icon, {
                        icon: _.default,
                        "aria-hidden": !0
                    }), (0, a.jsx)(E.default.Title, {
                        children: i
                    })]
                })
            }

            function D(e) {
                let {
                    guildId: t
                } = e, l = (0, u.useStateFromStores)([j.default], () => j.default.getGuild(t)), {
                    AnalyticsLocationProvider: n
                } = (0, o.default)(r.default.MEMBER_SAFETY_PAGE), c = (0, b.useCanAccessMemberSafetyPage)(t), h = (0, S.useCanAccessGuildMemberModView)(t), E = (0, u.useStateFromStores)([C.default], () => C.default.getLastSelectedChannelId(t)), T = (0, u.useStateFromStores)([x.default], () => x.default.getChannel(E)), _ = d.useRef(null);
                d.useEffect(() => {
                    if (!c && null != l) {
                        var e;
                        let t = null === (e = I.default.getDefaultChannel(l.id)) || void 0 === e ? void 0 : e.id;
                        (0, g.transitionToGuild)(l.id, t)
                    }
                }, [l, c]);
                let B = (0, u.useStateFromStores)([M.default], () => null != M.default.getGuildSidebarState(t), [t]),
                    D = d.useCallback(e => {
                        h ? (0, f.openGuildMemberModViewSidebar)(e.guildId, e.userId, v.StaticChannelRoute.MEMBER_SAFETY) : (0, m.openUserProfileModal)({
                            userId: e.userId,
                            guildId: e.guildId,
                            analyticsLocation: {
                                section: R.AnalyticsSections.MEMBER_SAFETY_PAGE
                            }
                        })
                    }, [h]);
                return null != l && c ? (0, a.jsxs)(n, {
                    children: [(0, a.jsxs)("div", {
                        className: i(F.chat, L.page, {
                            [F.threadSidebarOpen]: B
                        }),
                        children: [(0, a.jsx)(k, {
                            guild: l,
                            previousChannel: T
                        }), (0, a.jsx)(s.AdvancedScroller, {
                            className: i(L.scroller),
                            ref: _,
                            children: (0, a.jsxs)("div", {
                                className: i(F.content, L.container),
                                children: [(0, a.jsx)(A.default, {
                                    guild: l
                                }), (0, a.jsx)(G.default, {
                                    guild: l,
                                    onMemberSelect: D
                                })]
                            })
                        }), (0, a.jsx)(p.default, {
                            guildId: l.id
                        })]
                    }), h && (0, a.jsx)(N.default, {
                        guildId: l.id
                    })]
                }) : null
            }
        },
        891222: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            });
            var a = l("37983"),
                d = l("884691"),
                n = l("414456"),
                i = l.n(n),
                u = l("301165"),
                s = l("65597"),
                r = l("219115"),
                o = l("178406"),
                c = l("553275"),
                f = l("691307"),
                S = l("314143"),
                h = l("721302"),
                E = l("888940");

            function g(e) {
                let {
                    guild: t
                } = e, l = (0, r.useIsMakingRequestV2)(t.id), d = (0, u.useSpring)({
                    height: l ? 3 : 0,
                    config: u.config.stiff
                });
                return (0, a.jsx)("div", {
                    className: E.loaderContainer,
                    children: (0, a.jsx)(u.animated.div, {
                        className: E.loaderBar,
                        style: d
                    })
                })
            }

            function m(e) {
                let {
                    guild: t,
                    className: l,
                    onPageChange: n,
                    onMemberSelect: u
                } = e, m = (0, s.default)([o.default], () => o.default.getEstimatedMemberSearchCountByGuildId(t.id), [t.id]), M = (0, r.useIsMakingRequestV2)(t.id), x = (0, r.useIsStillIndexingV2)(t.id), I = d.useCallback(e => {
                    null != e && (null == u || u(e))
                }, [u]), j = (0, c.getSearchState)(x, M, m);
                return (0, a.jsxs)("div", {
                    className: i(E.mainTableContainer, l),
                    children: [(0, a.jsx)(h.default, {
                        guild: t
                    }), (0, a.jsx)(g, {
                        guild: t
                    }), (0, a.jsx)(f.default, {
                        guild: t,
                        onSelectRow: I,
                        searchState: j
                    }), j !== c.SearchState.SUCCESS_STILL_INDEXING && (0, a.jsx)(S.default, {
                        guildId: t.id,
                        onPageChange: n
                    })]
                })
            }
        }
    }
]);