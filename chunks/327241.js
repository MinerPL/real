            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                a = n("272030"),
                o = n("838446"),
                l = n("158534"),
                u = n("846883"),
                s = n("812204"),
                d = n("861370"),
                c = n("20209"),
                f = n("972701"),
                h = n("390008"),
                p = n("41205"),
                E = n("936947"),
                m = n("47495"),
                _ = n("715243"),
                g = n("458574"),
                x = n("963150"),
                v = n("308798"),
                C = n("47006"),
                O = n("878526"),
                I = n("44141"),
                N = n("531674"),
                b = n("619436"),
                y = n("625399"),
                P = n("731390"),
                S = n("339876"),
                A = n("49111"),
                M = n("782340");

            function R(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, o = (0, I.default)(t), l = (0, g.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), _ = (0, h.default)(t), x = (0, p.default)(t), v = (0, E.default)(t), O = (0, N.default)(t), P = (0, b.default)(t), S = (0, C.default)(t), A = (0, d.default)({
                    id: t.id,
                    label: M.default.Messages.COPY_ID_CHANNEL
                }), R = (0, u.default)(t), T = (0, y.default)(t), L = (0, m.useShouldUseNewNotificationSystem)("ChannelContextFavoritesMenu");
                return (0, r.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: a.closeContextMenu,
                    "aria-label": M.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, r.jsx)(i.MenuGroup, {
                        children: o
                    }), (0, r.jsxs)(i.MenuGroup, {
                        children: [x, v, _, s]
                    }), (0, r.jsxs)(i.MenuGroup, {
                        children: [O, L ? T : P]
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: S
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: R
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: c
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: l
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: A
                    })]
                })
            }

            function T(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: o
                } = e, l = (0, I.default)(t), u = (0, g.default)(t), s = (0, f.useAddToFavoritesItem)(t), c = (0, f.useRemoveFromFavoritesItem)(t), h = (0, S.default)(t), p = (0, N.default)(t), E = (0, C.default)(t), A = (0, O.default)(t, n), R = (0, _.default)(t, n), T = (0, x.default)(t, n), L = (0, v.default)(t), U = (0, d.default)({
                    id: t.id,
                    label: M.default.Messages.COPY_ID_CHANNEL
                }), F = (0, P.default)(t, "list_text_channel_context_menu"), w = (0, b.default)(t), D = (0, y.default)(t), j = (0, m.useShouldUseNewNotificationSystem)("ChannelContextMenuNormal");
                return (0, r.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: a.closeContextMenu,
                    "aria-label": M.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: o,
                    children: [(0, r.jsx)(i.MenuGroup, {
                        children: l
                    }, "mark-as-read"), (0, r.jsxs)(i.MenuGroup, {
                        children: [A, h, u, s, F]
                    }, "channel-actions"), (0, r.jsxs)(i.MenuGroup, {
                        children: [p, j ? D : w]
                    }, "notifications"), (0, r.jsxs)(i.MenuGroup, {
                        children: [E, R, T, L]
                    }, "admin-actions"), (0, r.jsx)(i.MenuGroup, {
                        children: c
                    }), (0, r.jsx)(i.MenuGroup, {
                        children: U
                    }, "developer-actions")]
                })
            }
            var L = (0, l.default)((0, o.default)(function(e) {
                let t = (0, c.default)();
                return t ? (0, r.jsx)(R, {
                    ...e
                }) : (0, r.jsx)(T, {
                    ...e
                })
            }, {
                object: A.AnalyticsObjects.CONTEXT_MENU
            }), [s.default.CONTEXT_MENU, s.default.CHANNEL_LIST_TEXT_CHANNEL_MENU])