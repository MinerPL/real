            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("394846"),
                l = n("446674"),
                r = n("77078"),
                o = n("850068"),
                u = n("516899"),
                d = n("69927"),
                c = n("657199"),
                E = n("250666"),
                f = n("465869"),
                _ = n("619443"),
                h = n("539938"),
                C = n("305961"),
                T = n("160299"),
                I = n("257869"),
                S = n("638779"),
                N = n("459736"),
                A = n("967251"),
                m = n("663831"),
                p = n("170185"),
                g = n("277860"),
                R = n("724210"),
                O = n("782340"),
                L = n("981239");

            function v(e) {
                let {
                    guildId: t
                } = e, n = (0, l.useStateFromStores)([C.default], () => C.default.getGuild(t), [t]), v = (0, l.useStateFromStores)([_.default], () => _.default.isConnected()), M = (0, E.default)(t), P = (0, S.default)(t), D = (0, l.useStateFromStores)([T.default], () => T.default.isSubscriptionFetching), y = (0, I.useGroupListingsFetchContext)(), {
                    shouldHideGuildPurchaseEntryPoints: x,
                    restrictionsLoading: b
                } = (0, f.useShouldHideGuildPurchaseEntryPoints)(t), U = null == n || !y || D || b;
                (0, d.usePageTitle)({
                    subsection: O.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
                    location: null == n ? void 0 : n.name
                }), (0, u.default)(i.isMobile ? "role-subscriptions-overview" : void 0);
                let G = v && (null == n || !(M || P) || x && !b);
                if (s.useEffect(() => {
                        o.fetchSubscriptions()
                    }, []), s.useEffect(() => {
                        G && !i.isMobile && (0, c.handleInaccessiblePage)(t, R.StaticChannelRoute.ROLE_SUBSCRIPTIONS)
                    }, [t, G]), i.isMobile && G) {
                    let e = null == n ? m.GuildRoleSubscriptionsOverviewErrorType.NOT_GUILD_MEMBER : m.GuildRoleSubscriptionsOverviewErrorType.GUILD_NOT_ELIGIBLE;
                    return (0, a.jsx)(m.GuildRoleSubscriptionsOverviewErrorPage, {
                        errorType: e
                    })
                }
                return (0, a.jsxs)("div", {
                    className: L.container,
                    children: [(0, a.jsxs)(h.default, {
                        toolbar: (0, a.jsx)(s.Fragment, {}),
                        className: L.headerBar,
                        children: [(0, a.jsx)(h.default.Icon, {
                            icon: N.default,
                            "aria-hidden": !0
                        }), (0, a.jsx)(h.default.Title, {
                            children: O.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
                        })]
                    }), (0, a.jsx)("div", {
                        id: g.OVERVIEW_NOTICE_ROOT
                    }), (0, a.jsx)("div", {
                        className: L.content,
                        children: M ? (0, a.jsx)(r.ScrollerNone, {
                            className: L.scroller,
                            children: (0, a.jsx)("div", {
                                className: L.scrollerContent,
                                children: U ? (0, a.jsx)(r.Spinner, {}) : (0, a.jsx)(A.default, {
                                    guild: n
                                })
                            })
                        }) : (0, a.jsx)(p.default, {})
                    })]
                })
            }

            function M(e) {
                let {
                    guildId: t
                } = e;
                return (0, a.jsx)(I.GroupListingsFetchContextProvider, {
                    guildId: t,
                    refetchOnMount: !0,
                    children: (0, a.jsx)(v, {
                        guildId: t
                    })
                })
            }