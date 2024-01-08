            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("627445"),
                a = n.n(i),
                l = n("446674"),
                u = n("77078"),
                r = n("272030"),
                o = n("812204"),
                d = n("685665"),
                c = n("861370"),
                f = n("255812"),
                S = n("529932"),
                E = n("47495"),
                g = n("724026"),
                _ = n("271938"),
                N = n("923959"),
                M = n("697218"),
                h = n("578411"),
                I = n("230947"),
                p = n("544955"),
                A = n("747867"),
                T = n("555914"),
                O = n("513472"),
                m = n("527660"),
                U = n("823772"),
                L = n("177508"),
                v = n("263673"),
                R = n("58622"),
                C = n("49111"),
                G = n("782340");

            function x(e) {
                let {
                    guild: t,
                    onSelect: i,
                    hideSettings: o
                } = e, d = t.id, x = N.default.getDefaultChannel(d), b = (0, S.useExpressionSourceGuildDataForGuildLeaveModal)(t), j = (0, l.useStateFromStores)([M.default], () => {
                    let e = M.default.getCurrentUser();
                    return a(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
                }, [t]), H = (0, R.default)({
                    guild: t,
                    source: C.InstantInviteSources.GUILD_CONTEXT_MENU,
                    channel: x
                }), P = (0, v.default)(d), F = (0, O.default)(t), D = (0, m.default)(t), y = (0, L.default)(t), w = (0, I.default)({
                    guildId: t.id,
                    userId: _.default.getId(),
                    analyticsLocation: {
                        page: C.AnalyticsPages.GUILD_CHANNEL,
                        section: C.AnalyticsSections.CHAT_USERNAME,
                        object: C.AnalyticsObjects.CONTEXT_MENU_ITEM
                    }
                }), V = (0, p.default)(t), k = (0, f.default)(t.id), Y = (0, c.default)({
                    id: t.id,
                    label: G.default.Messages.COPY_ID_GUILD
                }), B = (0, T.default)(t, {
                    section: C.AnalyticsSections.GUILD_LIST
                }), Z = (0, g.default)(t.id), z = (0, U.default)(t.id), W = (0, A.default)(t), X = (0, E.useShouldUseNewNotificationSystem)("GuildContextMenu"), K = t.hasFeature(C.GuildFeatures.HUB);

                function q() {
                    (0, u.openModal)(e => (0, s.jsx)(h.GuildLeaveConfirmModalContents, {
                        ...e,
                        guild: t,
                        discoverableGuildData: b
                    }))
                }
                return K ? (0, s.jsxs)(u.Menu, {
                    navId: "guild-context",
                    onClose: r.closeContextMenu,
                    "aria-label": G.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: i,
                    children: [(0, s.jsxs)(u.MenuGroup, {
                        children: [H, (0, s.jsx)(u.MenuItem, {
                            id: "privacy",
                            label: G.default.Messages.HUB_PRIVACY_SETTINGS,
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, s.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), w]
                    }), j ? null : (0, s.jsx)(u.MenuGroup, {
                        children: (0, s.jsx)(u.MenuItem, {
                            id: "leave-guild",
                            label: G.default.Messages.LEAVE_HUB,
                            action: q,
                            color: "danger"
                        })
                    }), (0, s.jsx)(u.MenuGroup, {
                        children: Y
                    })]
                }) : (0, s.jsxs)(u.Menu, {
                    navId: "guild-context",
                    onClose: r.closeContextMenu,
                    "aria-label": G.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: i,
                    children: [(0, s.jsx)(u.MenuGroup, {
                        children: B
                    }), (0, s.jsx)(u.MenuGroup, {
                        children: H
                    }), (0, s.jsxs)(u.MenuGroup, {
                        children: [F, X || __OVERLAY__ ? null : D, X && !__OVERLAY__ ? z : null, P, Z]
                    }), (0, s.jsxs)(u.MenuGroup, {
                        children: [o ? null : y, __OVERLAY__ ? null : (0, s.jsx)(u.MenuItem, {
                            id: "privacy",
                            label: G.default.Messages.PRIVACY_SETTINGS,
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, s.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), w]
                    }), (0, s.jsxs)(u.MenuGroup, {
                        children: [V, k]
                    }), (0, s.jsxs)(u.MenuGroup, {
                        children: [W, !j && (0, s.jsx)(u.MenuItem, {
                            id: "leave-guild",
                            label: G.default.Messages.LEAVE_SERVER,
                            action: q,
                            color: "danger"
                        })]
                    }), (0, s.jsx)(u.MenuGroup, {
                        children: Y
                    })]
                })
            }

            function b(e) {
                let {
                    AnalyticsLocationProvider: t
                } = (0, d.default)(o.default.CONTEXT_MENU);
                return (0, s.jsx)(t, {
                    children: (0, s.jsx)(x, {
                        ...e
                    })
                })
            }