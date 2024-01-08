            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var i = n("37983");
            n("884691");
            var s = n("627445"),
                a = n.n(s),
                l = n("446674"),
                u = n("77078"),
                o = n("272030"),
                d = n("812204"),
                r = n("685665"),
                c = n("861370"),
                S = n("255812"),
                f = n("529932"),
                g = n("47495"),
                E = n("724026"),
                _ = n("271938"),
                N = n("923959"),
                M = n("697218"),
                h = n("578411"),
                I = n("230947"),
                T = n("544955"),
                A = n("747867"),
                L = n("555914"),
                O = n("513472"),
                U = n("527660"),
                m = n("823772"),
                p = n("177508"),
                G = n("263673"),
                R = n("58622"),
                C = n("49111"),
                b = n("782340");

            function v(e) {
                let {
                    guild: t,
                    onSelect: s,
                    hideSettings: d
                } = e, r = t.id, v = N.default.getDefaultChannel(r), x = (0, f.useExpressionSourceGuildDataForGuildLeaveModal)(t), j = (0, l.useStateFromStores)([M.default], () => {
                    let e = M.default.getCurrentUser();
                    return a(null != e, "GuildContextMenu: user cannot be undefined"), t.isOwner(e)
                }, [t]), F = (0, R.default)({
                    guild: t,
                    source: C.InstantInviteSources.GUILD_CONTEXT_MENU,
                    channel: v
                }), P = (0, G.default)(r), D = (0, O.default)(t), y = (0, U.default)(t), H = (0, p.default)(t), w = (0, I.default)({
                    guildId: t.id,
                    userId: _.default.getId(),
                    analyticsLocation: {
                        page: C.AnalyticsPages.GUILD_CHANNEL,
                        section: C.AnalyticsSections.CHAT_USERNAME,
                        object: C.AnalyticsObjects.CONTEXT_MENU_ITEM
                    }
                }), k = (0, T.default)(t), Y = (0, S.default)(t.id), V = (0, c.default)({
                    id: t.id,
                    label: b.default.Messages.COPY_ID_GUILD
                }), B = (0, L.default)(t, {
                    section: C.AnalyticsSections.GUILD_LIST
                }), Z = (0, E.default)(t.id), W = (0, m.default)(t.id), X = (0, A.default)(t), z = (0, g.useShouldUseNewNotificationSystem)("GuildContextMenu"), K = t.hasFeature(C.GuildFeatures.HUB);

                function q() {
                    (0, u.openModal)(e => (0, i.jsx)(h.GuildLeaveConfirmModalContents, {
                        ...e,
                        guild: t,
                        discoverableGuildData: x
                    }))
                }
                return K ? (0, i.jsxs)(u.Menu, {
                    navId: "guild-context",
                    onClose: o.closeContextMenu,
                    "aria-label": b.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: s,
                    children: [(0, i.jsxs)(u.MenuGroup, {
                        children: [F, (0, i.jsx)(u.MenuItem, {
                            id: "privacy",
                            label: b.default.Messages.HUB_PRIVACY_SETTINGS,
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, i.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), w]
                    }), j ? null : (0, i.jsx)(u.MenuGroup, {
                        children: (0, i.jsx)(u.MenuItem, {
                            id: "leave-guild",
                            label: b.default.Messages.LEAVE_HUB,
                            action: q,
                            color: "danger"
                        })
                    }), (0, i.jsx)(u.MenuGroup, {
                        children: V
                    })]
                }) : (0, i.jsxs)(u.Menu, {
                    navId: "guild-context",
                    onClose: o.closeContextMenu,
                    "aria-label": b.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                    onSelect: s,
                    children: [(0, i.jsx)(u.MenuGroup, {
                        children: B
                    }), (0, i.jsx)(u.MenuGroup, {
                        children: F
                    }), (0, i.jsxs)(u.MenuGroup, {
                        children: [D, z || __OVERLAY__ ? null : y, z && !__OVERLAY__ ? W : null, P, Z]
                    }), (0, i.jsxs)(u.MenuGroup, {
                        children: [d ? null : H, __OVERLAY__ ? null : (0, i.jsx)(u.MenuItem, {
                            id: "privacy",
                            label: b.default.Messages.PRIVACY_SETTINGS,
                            action: () => (0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("349406").then(n.bind(n, "349406"));
                                return n => (0, i.jsx)(e, {
                                    ...n,
                                    guild: t
                                })
                            })
                        }), w]
                    }), (0, i.jsxs)(u.MenuGroup, {
                        children: [k, Y]
                    }), (0, i.jsxs)(u.MenuGroup, {
                        children: [X, !j && (0, i.jsx)(u.MenuItem, {
                            id: "leave-guild",
                            label: b.default.Messages.LEAVE_SERVER,
                            action: q,
                            color: "danger"
                        })]
                    }), (0, i.jsx)(u.MenuGroup, {
                        children: V
                    })]
                })
            }

            function x(e) {
                let {
                    AnalyticsLocationProvider: t
                } = (0, r.default)(d.default.CONTEXT_MENU);
                return (0, i.jsx)(t, {
                    children: (0, i.jsx)(v, {
                        ...e
                    })
                })
            }