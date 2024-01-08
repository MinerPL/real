            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("77078"),
                i = n("272030"),
                l = n("838446"),
                o = n("158534"),
                u = n("846883"),
                s = n("812204"),
                d = n("861370"),
                c = n("20209"),
                f = n("972701"),
                h = n("390008"),
                p = n("41205"),
                E = n("936947"),
                m = n("47495"),
                g = n("715243"),
                _ = n("458574"),
                v = n("963150"),
                x = n("308798"),
                I = n("47006"),
                C = n("878526"),
                O = n("44141"),
                N = n("531674"),
                y = n("619436"),
                b = n("625399"),
                S = n("731390"),
                P = n("339876"),
                A = n("49111"),
                T = n("782340");

            function R(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, l = (0, O.default)(t), o = (0, _.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), g = (0, h.default)(t), v = (0, p.default)(t), x = (0, E.default)(t), C = (0, N.default)(t), S = (0, y.default)(t), P = (0, I.default)(t), A = (0, d.default)({
                    id: t.id,
                    label: T.default.Messages.COPY_ID_CHANNEL
                }), R = (0, u.default)(t), M = (0, b.default)(t), L = (0, m.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
                return (0, r.jsxs)(a.Menu, {
                    navId: "channel-context",
                    onClose: i.closeContextMenu,
                    "aria-label": T.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, r.jsx)(a.MenuGroup, {
                        children: l
                    }), (0, r.jsxs)(a.MenuGroup, {
                        children: [v, x, g, s]
                    }), (0, r.jsxs)(a.MenuGroup, {
                        children: [C, L ? M : S]
                    }), (0, r.jsx)(a.MenuGroup, {
                        children: P
                    }), (0, r.jsx)(a.MenuGroup, {
                        children: R
                    }), (0, r.jsx)(a.MenuGroup, {
                        children: c
                    }), (0, r.jsx)(a.MenuGroup, {
                        children: o
                    }), (0, r.jsx)(a.MenuGroup, {
                        children: A
                    })]
                })
            }

            function M(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, o = (0, O.default)(t), u = (0, _.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), h = (0, P.default)(t), p = (0, N.default)(t), E = (0, I.default)(t), A = (0, C.default)(t, n), R = (0, g.default)(t, n), M = (0, v.default)(t, n), L = (0, x.default)(t), U = (0, d.default)({
                    id: t.id,
                    label: T.default.Messages.COPY_ID_CHANNEL
                }), F = (0, S.default)(t, "list_text_channel_context_menu"), D = (0, y.default)(t), w = (0, b.default)(t), G = (0, m.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
                return (0, r.jsxs)(a.Menu, {
                    navId: "channel-context",
                    onClose: i.closeContextMenu,
                    "aria-label": T.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, r.jsx)(a.MenuGroup, {
                        children: o
                    }, "mark-as-read"), (0, r.jsxs)(a.MenuGroup, {
                        children: [A, h, u, s, F]
                    }, "channel-actions"), (0, r.jsxs)(a.MenuGroup, {
                        children: [p, G ? w : D]
                    }, "notifications"), (0, r.jsxs)(a.MenuGroup, {
                        children: [E, R, M, L]
                    }, "admin-actions"), (0, r.jsx)(a.MenuGroup, {
                        children: c
                    }), (0, r.jsx)(a.MenuGroup, {
                        children: U
                    }, "developer-actions")]
                })
            }
            var L = (0, o.default)((0, l.default)(function(e) {
                let t = (0, c.default)();
                return t ? (0, r.jsx)(R, {
                    ...e
                }) : (0, r.jsx)(M, {
                    ...e
                })
            }, {
                object: A.AnalyticsObjects.CONTEXT_MENU
            }), [s.default.CONTEXT_MENU, s.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])