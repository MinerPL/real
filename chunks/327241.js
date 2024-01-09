            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                r = n("272030"),
                l = n("838446"),
                u = n("158534"),
                o = n("846883"),
                s = n("812204"),
                d = n("861370"),
                c = n("20209"),
                f = n("972701"),
                p = n("390008"),
                h = n("41205"),
                E = n("936947"),
                _ = n("47495"),
                m = n("715243"),
                g = n("458574"),
                I = n("963150"),
                v = n("308798"),
                S = n("47006"),
                y = n("878526"),
                C = n("44141"),
                N = n("531674"),
                T = n("619436"),
                A = n("625399"),
                O = n("731390"),
                x = n("339876"),
                b = n("49111"),
                P = n("782340");

            function M(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, l = (0, C.default)(t), u = (0, g.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), m = (0, p.default)(t), I = (0, h.default)(t), v = (0, E.default)(t), y = (0, N.default)(t), O = (0, T.default)(t), x = (0, S.default)(t), b = (0, d.default)({
                    id: t.id,
                    label: P.default.Messages.COPY_ID_CHANNEL
                }), M = (0, o.default)(t), R = (0, A.default)(t), L = (0, _.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: r.closeContextMenu,
                    "aria-label": P.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: l
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [I, v, m, s]
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [y, L ? R : O]
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: x
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: M
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: c
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: u
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: b
                    })]
                })
            }

            function R(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, u = (0, C.default)(t), o = (0, g.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), p = (0, x.default)(t), h = (0, N.default)(t), E = (0, S.default)(t), b = (0, y.default)(t, n), M = (0, m.default)(t, n), R = (0, I.default)(t, n), L = (0, v.default)(t), D = (0, d.default)({
                    id: t.id,
                    label: P.default.Messages.COPY_ID_CHANNEL
                }), U = (0, O.default)(t, "list_text_channel_context_menu"), G = (0, T.default)(t), F = (0, A.default)(t), V = (0, _.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: r.closeContextMenu,
                    "aria-label": P.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: u
                    }, "mark-as-read"), (0, a.jsxs)(i.MenuGroup, {
                        children: [b, p, o, s, U]
                    }, "channel-actions"), (0, a.jsxs)(i.MenuGroup, {
                        children: [h, V ? F : G]
                    }, "notifications"), (0, a.jsxs)(i.MenuGroup, {
                        children: [E, M, R, L]
                    }, "admin-actions"), (0, a.jsx)(i.MenuGroup, {
                        children: c
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: D
                    }, "developer-actions")]
                })
            }
            var L = (0, u.default)((0, l.default)(function(e) {
                let t = (0, c.default)();
                return t ? (0, a.jsx)(M, {
                    ...e
                }) : (0, a.jsx)(R, {
                    ...e
                })
            }, {
                object: b.AnalyticsObjects.CONTEXT_MENU
            }), [s.default.CONTEXT_MENU, s.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])