            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("77078"),
                s = n("272030"),
                l = n("158534"),
                u = n("812204"),
                r = n("861370"),
                o = n("20209"),
                d = n("390008"),
                f = n("47495"),
                c = n("178261"),
                E = n("852275"),
                _ = n("963150"),
                N = n("655235"),
                g = n("308798"),
                C = n("47006"),
                M = n("44141"),
                A = n("531674"),
                S = n("619436"),
                T = n("625399"),
                L = n("339876"),
                O = n("782340");

            function h(e) {
                let {
                    channel: t,
                    onSelect: n
                } = e, l = (0, M.default)(t), u = (0, A.default)(t), o = (0, S.default)(t), _ = (0, E.default)(t), g = (0, c.default)(t), C = (0, d.default)(t), L = (0, N.default)(t), h = (0, r.default)({
                    id: t.id,
                    label: O.default.Messages.COPY_ID_CHANNEL
                }), p = (0, f.useShouldUseNewNotificationSystem)("ChannelCategoryFavoritesMenu"), v = (0, T.default)(t);
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: s.closeContextMenu,
                    "aria-label": O.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: l
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [u, p ? v : o]
                    }), (0, a.jsxs)(i.MenuGroup, {
                        children: [_, g, C]
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: L
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: h
                    })]
                })
            }

            function p(e) {
                let {
                    channel: t,
                    guild: n,
                    onSelect: l
                } = e, u = (0, M.default)(t), o = (0, A.default)(t), N = (0, S.default)(t), h = (0, E.default)(t), p = (0, c.default)(t), v = (0, C.default)(t), U = (0, d.default)(t), I = (0, _.default)(t, n), m = (0, g.default)(t), R = (0, r.default)({
                    id: t.id,
                    label: O.default.Messages.COPY_ID_CHANNEL
                }), y = (0, L.default)(t), F = (0, f.useShouldUseNewNotificationSystem)("ChannelCategoryNormalMenu"), G = (0, T.default)(t);
                return (0, a.jsxs)(i.Menu, {
                    navId: "channel-context",
                    onClose: s.closeContextMenu,
                    "aria-label": O.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: l,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: u
                    }, "mark-as-read"), (0, a.jsxs)(i.MenuGroup, {
                        children: [y, h, p]
                    }, "channel-actions"), (0, a.jsxs)(i.MenuGroup, {
                        children: [o, F ? G : N]
                    }, "notifications"), (0, a.jsxs)(i.MenuGroup, {
                        children: [v, U, I, m]
                    }, "admin-actions"), (0, a.jsx)(i.MenuGroup, {
                        children: R
                    }, "developer-actions")]
                })
            }
            var v = (0, l.default)(function(e) {
                let t = (0, o.default)();
                return t ? (0, a.jsx)(h, {
                    ...e
                }) : (0, a.jsx)(p, {
                    ...e
                })
            }, [u.default.CONTEXT_MENU, u.default.CHANNEL_CATEGORY_MENU])