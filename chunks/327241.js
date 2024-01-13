            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("77078"),
                i = n("272030"),
                l = n("838446"),
                o = n("158534"),
                u = n("846883"),
                s = n("812204"),
                d = n("861370"),
                c = n("20209"),
                p = n("972701"),
                f = n("390008"),
                h = n("41205"),
                E = n("936947"),
                _ = n("47495"),
                m = n("715243"),
                g = n("458574"),
                I = n("963150"),
                C = n("308798"),
                v = n("47006"),
                x = n("878526"),
                S = n("44141"),
                N = n("531674"),
                y = n("619436"),
                b = n("625399"),
                O = n("731390"),
                A = n("339876"),
                T = n("49111"),
                P = n("782340");

            function M(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, l = (0, S.default)(t), o = (0, g.default)(t), s = (0, p.useAddToFavoritesItem)(t), c = (0, p.useRemoveFromFavoritesItem)(t), m = (0, f.default)(t), I = (0, h.default)(t), C = (0, E.default)(t), x = (0, N.default)(t), O = (0, y.default)(t), A = (0, v.default)(t), T = (0, d.default)({
                    id: t.id,
                    label: P.default.Messages.COPY_ID_CHANNEL
                }), M = (0, u.default)(t), R = (0, b.default)(t), L = (0, _.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
                return (0, a.jsxs)(r.Menu, {
                    navId: "channel-context",
                    onClose: i.closeContextMenu,
                    "aria-label": P.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, a.jsx)(r.MenuGroup, {
                        children: l
                    }), (0, a.jsxs)(r.MenuGroup, {
                        children: [I, C, m, s]
                    }), (0, a.jsxs)(r.MenuGroup, {
                        children: [x, L ? R : O]
                    }), (0, a.jsx)(r.MenuGroup, {
                        children: A
                    }), (0, a.jsx)(r.MenuGroup, {
                        children: M
                    }), (0, a.jsx)(r.MenuGroup, {
                        children: c
                    }), (0, a.jsx)(r.MenuGroup, {
                        children: o
                    }), (0, a.jsx)(r.MenuGroup, {
                        children: T
                    })]
                })
            }

            function R(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, o = (0, S.default)(t), u = (0, g.default)(t), s = (0, p.useAddToFavoritesItem)(t), c = (0, p.useRemoveFromFavoritesItem)(t), f = (0, A.default)(t), h = (0, N.default)(t), E = (0, v.default)(t), T = (0, x.default)(t, n), M = (0, m.default)(t, n), R = (0, I.default)(t, n), L = (0, C.default)(t), D = (0, d.default)({
                    id: t.id,
                    label: P.default.Messages.COPY_ID_CHANNEL
                }), U = (0, O.default)(t, "list_text_channel_context_menu"), F = (0, y.default)(t), w = (0, b.default)(t), H = (0, _.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
                return (0, a.jsxs)(r.Menu, {
                    navId: "channel-context",
                    onClose: i.closeContextMenu,
                    "aria-label": P.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsx)(r.MenuGroup, {
                        children: o
                    }, "mark-as-read"), (0, a.jsxs)(r.MenuGroup, {
                        children: [T, f, u, s, U]
                    }, "channel-actions"), (0, a.jsxs)(r.MenuGroup, {
                        children: [h, H ? w : F]
                    }, "notifications"), (0, a.jsxs)(r.MenuGroup, {
                        children: [E, M, R, L]
                    }, "admin-actions"), (0, a.jsx)(r.MenuGroup, {
                        children: c
                    }), (0, a.jsx)(r.MenuGroup, {
                        children: D
                    }, "developer-actions")]
                })
            }
            var L = (0, o.default)((0, l.default)(function(e) {
                let t = (0, c.default)();
                return t ? (0, a.jsx)(M, {
                    ...e
                }) : (0, a.jsx)(R, {
                    ...e
                })
            }, {
                object: T.AnalyticsObjects.CONTEXT_MENU
            }), [s.default.CONTEXT_MENU, s.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])